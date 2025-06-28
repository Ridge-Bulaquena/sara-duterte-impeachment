
import { useTheme } from "@/contexts/ThemeContext";
import { Scale, FileText, Users, BookOpen, ExternalLink } from "lucide-react";

export const DemoHeader = () => {
  const { settings } = useTheme();

  const getHeaderClasses = () => {
    switch (settings.headerStyle) {
      case 'centered':
        return 'flex flex-col items-center space-y-4 py-6';
      case 'split':
        return 'flex justify-between items-center';
      default:
        return 'flex justify-between items-center';
    }
  };

  return (
    <header 
      className="border-b-2 shadow-sm"
      style={{ 
        height: `${settings.headerHeight}px`,
        backgroundColor: settings.backgroundColor,
        borderColor: settings.dividerGray
      }}
    >
      <div 
        className={`container mx-auto px-6 h-full ${getHeaderClasses()}`}
        style={{ maxWidth: `${settings.containerWidth}px` }}
      >
        <div className="flex items-center space-x-3">
          <Scale 
            className="h-8 w-8" 
            style={{ color: settings.highlightCrimson }}
          />
          <div>
            <h1 
              className="text-xl font-bold leading-tight"
              style={{ 
                color: settings.primaryColor,
                fontFamily: `${settings.headingFont}, serif`
              }}
            >
              {settings.siteName}
            </h1>
            <p className="text-sm opacity-75" style={{ color: settings.softSlateBlue }}>
              Public Legal Education Resource
            </p>
          </div>
        </div>

        {settings.headerStyle === 'centered' ? (
          <nav className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <BookOpen className="h-4 w-4" />
              <span>Legal Analysis</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Users className="h-4 w-4" />
              <span>Timeline</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ExternalLink className="h-4 w-4" />
              <span>Resources</span>
            </a>
          </nav>
        ) : (
          <nav className="flex items-center space-x-8">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: settings.primaryColor }}
            >
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: settings.primaryColor }}
            >
              <BookOpen className="h-4 w-4" />
              <span>Legal Analysis</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: settings.primaryColor }}
            >
              <Users className="h-4 w-4" />
              <span>Timeline</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: settings.primaryColor }}
            >
              <ExternalLink className="h-4 w-4" />
              <span>Resources</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
