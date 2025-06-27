
import { useTheme } from "@/contexts/ThemeContext";
import { Star, Users, Zap, Shield } from "lucide-react";

export const DemoContent = () => {
  const { settings } = useTheme();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div 
        className="container mx-auto"
        style={{ maxWidth: `${settings.containerWidth}px` }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Our Themes?
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            We've built our themes with the latest technology and design principles
            to ensure your website stands out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Star, title: "Premium Quality", desc: "Professional designs that convert" },
            { icon: Users, title: "User Friendly", desc: "Easy to use for beginners" },
            { icon: Zap, title: "Fast Loading", desc: "Optimized for performance" },
            { icon: Shield, title: "Secure Code", desc: "Built with security in mind" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: settings.primaryColor + '20' }}
              >
                <item.icon className="h-8 w-8" style={{ color: settings.primaryColor }} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Powerful Customization Options
              </h3>
              <p className="text-lg opacity-80 mb-6">
                Our theme builder gives you complete control over your website's appearance.
                Change colors, fonts, layouts, and more with our intuitive visual editor.
              </p>
              <div className="space-y-4">
                {[
                  "Visual drag-and-drop editor",
                  "Real-time preview",
                  "Custom CSS support",
                  "Mobile-responsive controls"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: settings.primaryColor }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold mb-2">Live Preview</h4>
              <p className="opacity-80">See your changes instantly as you customize</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
