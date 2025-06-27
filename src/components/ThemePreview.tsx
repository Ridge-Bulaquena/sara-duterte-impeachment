
import { useTheme } from "@/contexts/ThemeContext";
import { DemoHeader } from "@/components/preview/DemoHeader";
import { DemoHero } from "@/components/preview/DemoHero";
import { DemoContent } from "@/components/preview/DemoContent";
import { DemoFooter } from "@/components/preview/DemoFooter";

export const ThemePreview = () => {
  const { settings } = useTheme();

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="h-full overflow-y-auto">
          <div 
            className="min-h-full"
            style={{
              backgroundColor: settings.backgroundColor,
              color: settings.textColor,
              fontSize: `${settings.fontSize}px`,
              fontFamily: settings.fontFamily,
            }}
          >
            <DemoHeader />
            <DemoHero />
            <DemoContent />
            <DemoFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
