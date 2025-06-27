
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const LayoutControls = () => {
  const { settings, updateSettings } = useTheme();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Layout Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium">
              Container Width: {settings.containerWidth}px
            </Label>
            <Slider
              value={[settings.containerWidth]}
              onValueChange={(value) => updateSettings({ containerWidth: value[0] })}
              min={800}
              max={1400}
              step={50}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium">
              Border Radius: {settings.borderRadius}px
            </Label>
            <Slider
              value={[settings.borderRadius]}
              onValueChange={(value) => updateSettings({ borderRadius: value[0] })}
              min={0}
              max={20}
              step={1}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
