
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Search, ShoppingCart, User } from "lucide-react";

export const DemoHeader = () => {
  const { settings } = useTheme();

  const getHeaderClasses = () => {
    switch (settings.headerStyle) {
      case 'centered':
        return 'flex flex-col items-center space-y-4';
      case 'split':
        return 'flex justify-between items-center';
      default:
        return 'flex justify-between items-center';
    }
  };

  return (
    <header 
      className="border-b"
      style={{ 
        height: `${settings.headerHeight}px`,
        backgroundColor: settings.backgroundColor,
        borderColor: settings.primaryColor + '20'
      }}
    >
      <div 
        className={`container mx-auto px-4 h-full ${getHeaderClasses()}`}
        style={{ maxWidth: `${settings.containerWidth}px` }}
      >
        <div className="flex items-center">
          <h1 
            className="text-2xl font-bold"
            style={{ color: settings.primaryColor }}
          >
            {settings.siteName}
          </h1>
        </div>

        {settings.headerStyle === 'centered' ? (
          <nav className="flex items-center space-x-8">
            <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="#" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Blog</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>
        ) : (
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
              <a href="#" className="hover:opacity-80 transition-opacity">About</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Services</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Blog</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 cursor-pointer hover:opacity-80" />
              <ShoppingCart className="h-5 w-5 cursor-pointer hover:opacity-80" />
              <User className="h-5 w-5 cursor-pointer hover:opacity-80" />
              <Menu className="h-5 w-5 cursor-pointer hover:opacity-80 md:hidden" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
