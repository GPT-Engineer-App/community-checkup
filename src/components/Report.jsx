import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Report = ({ data }) => {
  // Simple scoring algorithm
  const calculateHealthScore = () => {
    let score = 0;
    if (data.engagementRate === 'high') score += 33;
    else if (data.engagementRate === 'medium') score += 22;
    else score += 11;

    if (data.memberSatisfaction === 'high') score += 34;
    else if (data.memberSatisfaction === 'medium') score += 23;
    else score += 12;

    if (data.retentionRate === 'high') score += 33;
    else if (data.retentionRate === 'medium') score += 22;
    else score += 11;

    return score;
  };

  const healthScore = calculateHealthScore();

  // Simple recommendation based on lowest score
  const getRecommendation = () => {
    const scores = {
      engagement: data.engagementRate === 'high' ? 3 : data.engagementRate === 'medium' ? 2 : 1,
      satisfaction: data.memberSatisfaction === 'high' ? 3 : data.memberSatisfaction === 'medium' ? 2 : 1,
      retention: data.retentionRate === 'high' ? 3 : data.retentionRate === 'medium' ? 2 : 1
    };

    const lowestScore = Math.min(...Object.values(scores));
    const lowestArea = Object.keys(scores).find(key => scores[key] === lowestScore);

    switch (lowestArea) {
      case 'engagement':
        return "Focus on increasing member engagement through more interactive content and regular community events.";
      case 'satisfaction':
        return "Improve member satisfaction by conducting surveys to understand pain points and addressing them promptly.";
      case 'retention':
        return "Boost retention by implementing a robust onboarding process and creating more value for long-term members.";
      default:
        return "Continue to monitor all areas of your community health and make incremental improvements.";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Community Health Report</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Community Health Score</h3>
        <Progress value={healthScore} className="w-full" />
        <p className="mt-2">Your score: {healthScore}/100</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Benchmarking</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Engagement Rate: {data.engagementRate} (Industry average: Medium)</li>
          <li>Member Satisfaction: {data.memberSatisfaction} (Industry average: Medium)</li>
          <li>Retention Rate: {data.retentionRate} (Industry average: Medium)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Quick-Win Recommendation</h3>
        <p>{getRecommendation()}</p>
      </div>

      <Button onClick={() => window.print()}>Print Report</Button>
    </div>
  );
};

export default Report;
