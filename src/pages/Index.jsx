// Update this page (the content is just a fallback if you fail to update the page)

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SurveyForm from '../components/SurveyForm';
import Report from '../components/Report';

const Index = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [surveyData, setSurveyData] = useState(null);

  const handleStartSurvey = () => {
    setShowSurvey(true);
  };

  const handleSurveySubmit = (data) => {
    setSurveyData(data);
    setShowSurvey(false);
    setShowReport(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Community Checker</CardTitle>
          <CardDescription>Gain valuable insights about your community in just 5 minutes!</CardDescription>
        </CardHeader>
        <CardContent>
          {!showSurvey && !showReport && (
            <div className="text-center">
              <p className="mb-4">See how your community stacks up against others in your industry.</p>
              <Button onClick={handleStartSurvey}>Start 5-Minute Check-Up</Button>
            </div>
          )}
          {showSurvey && <SurveyForm onSubmit={handleSurveySubmit} />}
          {showReport && <Report data={surveyData} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
