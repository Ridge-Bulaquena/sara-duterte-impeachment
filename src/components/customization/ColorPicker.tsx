
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const ColorPicker = () => {
  const { settings, updateSettings } = useTheme();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Color Scheme</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primary-color" className="text-xs font-medium">Primary Color</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="primary-color"
                type="color"
                value={settings.primaryColor}
                onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                type="text"
                value={settings.primaryColor}
                onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                className="flex-1 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="secondary-color" className="text-xs font-medium">Secondary Color</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="secondary-color"
                type="color"
                value={settings.secondaryColor}
                onChange={(e) => updateSettings({ secondaryColor: e.target.value })}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                type="text"
                value={settings.secondaryColor}
                onChange={(e) => updateSettings({ secondaryColor: e.target.value })}
                className="flex-1 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bg-color" className="text-xs font-medium">Background Color</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="bg-color"
                type="color"
                value={settings.backgroundColor}
                onChange={(e) => updateSettings({ backgroundColor: e.target.value })}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                type="text"
                value={settings.backgroundColor}
                onChange={(e) => updateSettings({ backgroundColor: e.target.value })}
                className="flex-1 text-xs"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text-color" className="text-xs font-medium">Text Color</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="text-color"
                type="color"
                value={settings.textColor}
                onChange={(e) => updateSettings({ textColor: e.target.value })}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                type="text"
                value={settings.textColor}
                onChange={(e) => updateSettings({ textColor: e.target.value })}
                className="flex-1 text-xs"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
