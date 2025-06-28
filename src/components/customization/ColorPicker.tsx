
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ColorPicker = () => {
  const { settings, updateSettings } = useTheme();

  const colorPalette = [
    { name: 'Deep Slate Base', value: '#2D3748', key: 'deepSlateBase' },
    { name: 'Muted Gold 1', value: '#b5a58a', key: 'mutedGold1' },
    { name: 'Muted Gold 2', value: '#8c7b5e', key: 'mutedGold2' },
    { name: 'Deep Gold', value: '#6e5d3f', key: 'deepGold' },
    { name: 'Light Tan', value: '#c4bba9', key: 'lightTan' },
    { name: 'Off-White', value: '#F7FAFC', key: 'offWhite' },
    { name: 'Soft Slate Blue', value: '#4A5568', key: 'softSlateBlue' },
    { name: 'Divider Gray', value: '#A0AEC0', key: 'dividerGray' },
    { name: 'Highlight Crimson', value: '#6B1F1F', key: 'highlightCrimson' },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Sara Duterte Hub Colors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {colorPalette.map((color) => (
              <div key={color.key} className="space-y-1">
                <div 
                  className="h-8 w-full rounded border-2 border-gray-200 cursor-pointer"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
                <p className="text-xs text-center truncate">{color.name}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4">
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
