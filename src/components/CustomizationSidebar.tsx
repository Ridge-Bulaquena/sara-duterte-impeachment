
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorPicker } from "@/components/customization/ColorPicker";
import { TypographyControls } from "@/components/customization/TypographyControls";
import { LayoutControls } from "@/components/customization/LayoutControls";
import { HeaderControls } from "@/components/customization/HeaderControls";
import { Palette, Type, Layout, Navigation } from "lucide-react";

export const CustomizationSidebar = () => {
  const { settings } = useTheme();

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Customize Theme</h2>
        <p className="text-sm text-gray-500">Personalize your WordPress theme</p>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors" className="flex flex-col items-center gap-1 text-xs">
            <Palette className="h-4 w-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex flex-col items-center gap-1 text-xs">
            <Type className="h-4 w-4" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex flex-col items-center gap-1 text-xs">
            <Layout className="h-4 w-4" />
            Layout
          </TabsTrigger>
          <TabsTrigger value="header" className="flex flex-col items-center gap-1 text-xs">
            <Navigation className="h-4 w-4" />
            Header
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <ColorPicker />
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <TypographyControls />
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          <LayoutControls />
        </TabsContent>

        <TabsContent value="header" className="space-y-4">
          <HeaderControls />
        </TabsContent>
      </Tabs>
    </div>
  );
};
