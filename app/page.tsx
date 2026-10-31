import { Fiki } from "@/components/Fiki";
import { getInterviewStats } from "@/lib/interviewStats";

// Keep in sync with STATS_REVALIDATE_SECONDS: Next needs a literal here.
export const revalidate = 300;

export default async function Home() {
  const interviews = await getInterviewStats();
  return <Fiki interviews={interviews} />;
}
