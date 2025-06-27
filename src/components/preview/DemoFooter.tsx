
import { useTheme } from "@/contexts/ThemeContext";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const DemoFooter = () => {
  const { settings } = useTheme();

  return (
    <footer className="py-16 px-4 bg-gray-900 text-white">
      <div 
        className="container mx-auto"
        style={{ maxWidth: `${settings.containerWidth}px` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: settings.primaryColor }}
            >
              {settings.siteName}
            </h3>
            <p className="opacity-80 mb-4">
              Professional WordPress themes built with care and attention to detail.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:opacity-80" />
              <Twitter className="h-5 w-5 cursor-pointer hover:opacity-80" />
              <Instagram className="h-5 w-5 cursor-pointer hover:opacity-80" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:opacity-80" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-80">WordPress Themes</a></li>
              <li><a href="#" className="hover:opacity-80">Plugins</a></li>
              <li><a href="#" className="hover:opacity-80">Templates</a></li>
              <li><a href="#" className="hover:opacity-80">Blocks</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-80">Documentation</a></li>
              <li><a href="#" className="hover:opacity-80">Tutorials</a></li>
              <li><a href="#" className="hover:opacity-80">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-80">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-80">About</a></li>
              <li><a href="#" className="hover:opacity-80">Blog</a></li>
              <li><a href="#" className="hover:opacity-80">Careers</a></li>
              <li><a href="#" className="hover:opacity-80">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center opacity-80">
          <p>&copy; 2024 {settings.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
