
import { Button } from "@/components/ui/button";
import { Save, Eye, Settings, Download } from "lucide-react";

export const ThemeHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Kadence Crafted</h1>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">WordPress Theme Builder</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4" />
            Save Theme
          </Button>
        </div>
      </div>
    </header>
  );
};
