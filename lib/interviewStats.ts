export type InterviewBreakdown = {
  answered: number;
  answers: { label: string; count: number }[];
};

export type InterviewStats = {
  responses: number;
  minResponses: number;
  breakdowns: Record<string, InterviewBreakdown> | null;
};

// Apps Script web app from scripts/interview-stats.gs. It only ever returns totals.
const STATS_URL =
  process.env.INTERVIEW_STATS_URL ??
  "https://script.google.com/macros/s/AKfycbzLxJfiKQp4yfM-o1Ams-Gq79aE9n9W9CyJpRzu5YwbqKrxthKl4yEggNKEwjyxk659FA/exec";

export const STATS_REVALIDATE_SECONDS = 300;

export async function getInterviewStats(): Promise<InterviewStats | null> {
  try {
    const res = await fetch(STATS_URL, {
      next: { revalidate: STATS_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.responses === "number" ? data : null;
  } catch {
    // The rest of the page shouldn't depend on Google being reachable.
    return null;
  }
}
