
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

export const HeaderControls = () => {
  const { settings, updateSettings } = useTheme();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Header Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium">Site Name</Label>
            <Input
              value={settings.siteName}
              onChange={(e) => updateSettings({ siteName: e.target.value })}
              placeholder="Sara Duterte Impeachment Hub"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium">Header Style</Label>
            <RadioGroup
              value={settings.headerStyle}
              onValueChange={(value: 'default' | 'centered' | 'split') => 
                updateSettings({ headerStyle: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="default" />
                <Label htmlFor="default" className="text-xs">Professional (Government Style)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="centered" id="centered" />
                <Label htmlFor="centered" className="text-xs">Centered (Academic)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="split" id="split" />
                <Label htmlFor="split" className="text-xs">Split Layout</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium">
              Header Height: {settings.headerHeight}px
            </Label>
            <Slider
              value={[settings.headerHeight]}
              onValueChange={(value) => updateSettings({ headerHeight: value[0] })}
              min={60}
              max={120}
              step={5}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
