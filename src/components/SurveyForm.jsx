import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SurveyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    communitySize: '',
    engagementRate: '',
    memberSatisfaction: '',
    retentionRate: '',
    communityPurpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="communitySize">Community Size</Label>
        <Input
          id="communitySize"
          name="communitySize"
          type="number"
          required
          value={formData.communitySize}
          onChange={handleChange}
          placeholder="Enter number of members"
        />
      </div>

      <div>
        <Label>Engagement Rate</Label>
        <RadioGroup name="engagementRate" value={formData.engagementRate} onValueChange={(value) => handleChange({ target: { name: 'engagementRate', value } })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="engagementLow" />
            <Label htmlFor="engagementLow">Low</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="engagementMedium" />
            <Label htmlFor="engagementMedium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="engagementHigh" />
            <Label htmlFor="engagementHigh">High</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>Member Satisfaction</Label>
        <RadioGroup name="memberSatisfaction" value={formData.memberSatisfaction} onValueChange={(value) => handleChange({ target: { name: 'memberSatisfaction', value } })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="satisfactionLow" />
            <Label htmlFor="satisfactionLow">Low</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="satisfactionMedium" />
            <Label htmlFor="satisfactionMedium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="satisfactionHigh" />
            <Label htmlFor="satisfactionHigh">High</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label>Retention Rate</Label>
        <RadioGroup name="retentionRate" value={formData.retentionRate} onValueChange={(value) => handleChange({ target: { name: 'retentionRate', value } })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="low" id="retentionLow" />
            <Label htmlFor="retentionLow">Low</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="retentionMedium" />
            <Label htmlFor="retentionMedium">Medium</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="high" id="retentionHigh" />
            <Label htmlFor="retentionHigh">High</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="communityPurpose">Primary Community Purpose</Label>
        <Input
          id="communityPurpose"
          name="communityPurpose"
          required
          value={formData.communityPurpose}
          onChange={handleChange}
          placeholder="e.g., Support, Networking, Learning"
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SurveyForm;
