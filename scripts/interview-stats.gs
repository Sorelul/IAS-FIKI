// Google Apps Script web app behind the interviews section on the site.
// It returns only totals, so raw answers and contact details never leave Google.
// Deploy: Web app, execute as me, access: anyone. Paste edits into the same deployment
// (Manage deployments > edit > new version) so the URL in lib/interviewStats.ts stays valid.

const FORM_ID = "15QvVQ6zBt3qI83eVoaApwrlJ8Jo2oM8VNtMk6-_YPYU";

// Below this many responses a breakdown could reveal what one person answered.
const MIN_RESPONSES = 3;

// Free-text "Other" answers are grouped here so nothing typed by a respondent gets published.
const OTHER = "Altele";

const QUESTIONS = {
  platform: "Platforma magazinului",
  orders: "Comenzi pe lună",
  codShare: "Ce procent din comenzi sunt cu plata ramburs?",
  reasons: "Care sunt cele mai frecvente motive de refuz?",
  contribute: "Ați contribui cu date anonimizate (telefon criptat + rezultatul livrării) în schimbul accesului la scorurile din toată rețeaua?",
  trial: "Ați testa gratuit 30 de zile pe comenzile reale?",
  pay: "Cât ați plăti lunar pentru un astfel de serviciu?",
};

function choicesOf(item) {
  switch (item.getType()) {
    case FormApp.ItemType.MULTIPLE_CHOICE:
      return item.asMultipleChoiceItem().getChoices();
    case FormApp.ItemType.CHECKBOX:
      return item.asCheckboxItem().getChoices();
    case FormApp.ItemType.LIST:
      return item.asListItem().getChoices();
    default:
      return [];
  }
}

function breakdownOf(item, responses) {
  const labels = choicesOf(item).map((choice) => choice.getValue());
  const counts = {};
  labels.forEach((label) => (counts[label] = 0));
  let answered = 0;
  let other = 0;

  responses.forEach((response) => {
    const itemResponse = response.getResponseForItem(item);
    const value = itemResponse ? itemResponse.getResponse() : null;
    const values = (Array.isArray(value) ? value : [value]).filter(Boolean);
    if (values.length === 0) return;
    answered++;
    if (values.some((v) => !(v in counts))) other++;
    values.filter((v) => v in counts).forEach((v) => counts[v]++);
  });

  const answers = labels.map((label) => ({ label, count: counts[label] }));
  if (other > 0) answers.push({ label: OTHER, count: other });
  return { answered, answers };
}

function buildStats(form) {
  const responses = form.getResponses();
  const stats = { responses: responses.length, minResponses: MIN_RESPONSES, breakdowns: null };
  if (responses.length < MIN_RESPONSES) return stats;

  const items = form.getItems();
  stats.breakdowns = {};
  Object.keys(QUESTIONS).forEach((key) => {
    const item = items.find((i) => i.getTitle() === QUESTIONS[key]);
    if (item) stats.breakdowns[key] = breakdownOf(item, responses);
  });
  return stats;
}

function doGet() {
  const stats = buildStats(FormApp.openById(FORM_ID));
  return ContentService.createTextOutput(JSON.stringify(stats)).setMimeType(ContentService.MimeType.JSON);
}
