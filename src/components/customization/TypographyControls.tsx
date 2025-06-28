
import { useTheme } from "@/contexts/ThemeContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export const TypographyControls = () => {
  const { settings, updateSettings } = useTheme();

  const fontFamilies = [
    { value: 'Figtree', label: 'Figtree (Body)' },
    { value: 'Inter', label: 'Inter' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Open Sans', label: 'Open Sans' },
  ];

  const headingFonts = [
    { value: 'Playfair Display', label: 'Playfair Display (Scholarly)' },
    { value: 'Blacker Display', label: 'Blacker Display (Premium)' },
    { value: 'Lora', label: 'Lora' },
    { value: 'Montserrat', label: 'Montserrat' },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-medium">Heading Font</Label>
            <Select
              value={settings.headingFont}
              onValueChange={(value) => updateSettings({ headingFont: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select heading font" />
              </SelectTrigger>
              <SelectContent>
                {headingFonts.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium">Body Font</Label>
            <Select
              value={settings.fontFamily}
              onValueChange={(value) => updateSettings({ fontFamily: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select body font" />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium">
              Font Size: {settings.fontSize}px
            </Label>
            <Slider
              value={[settings.fontSize]}
              onValueChange={(value) => updateSettings({ fontSize: value[0] })}
              min={14}
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
