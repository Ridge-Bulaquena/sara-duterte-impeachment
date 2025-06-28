
import { useTheme } from "@/contexts/ThemeContext";
import { Scale, AlertTriangle } from "lucide-react";

export const DemoHero = () => {
  const { settings } = useTheme();

  return (
    <section 
      className="py-16 px-6"
      style={{ 
        backgroundColor: `${settings.lightTan}20`,
        borderBottom: `1px solid ${settings.dividerGray}`
      }}
    >
      <div 
        className="container mx-auto text-center"
        style={{ maxWidth: `${settings.containerWidth}px` }}
      >
        <div className="flex justify-center mb-6">
          <div 
            className="p-4 rounded-full"
            style={{ backgroundColor: `${settings.highlightCrimson}10` }}
          >
            <Scale 
              className="h-12 w-12" 
              style={{ color: settings.highlightCrimson }}
            />
          </div>
        </div>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ 
            color: settings.primaryColor,
            fontFamily: `${settings.headingFont}, serif`
          }}
        >
          Understanding the{" "}
          <span style={{ color: settings.highlightCrimson }}>
            Impeachment Process
          </span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed scholarly-content"
          style={{ 
            color: settings.softSlateBlue,
            fontFamily: settings.fontFamily
          }}
        >
          A comprehensive public education resource examining the constitutional, 
          legal, and procedural aspects of impeachment proceedings in the Philippines.
        </p>
        
        <div className="flex justify-center items-center space-x-2 mb-8">
          <AlertTriangle 
            className="h-5 w-5" 
            style={{ color: settings.deepGold }}
          />
          <p 
            className="text-sm font-medium"
            style={{ color: settings.deepGold }}
          >
            Educational Resource • Objective Analysis • Public Interest
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
            style={{ 
              backgroundColor: settings.primaryColor,
              color: settings.offWhite 
            }}
          >
            Explore Legal Framework
          </button>
          <button 
            className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:shadow-lg"
            style={{ 
              borderColor: settings.mutedGold1,
              color: settings.primaryColor,
              backgroundColor: 'transparent'
            }}
          >
            View Timeline
          </button>
        </div>
      </div>
    </section>
  );
};
