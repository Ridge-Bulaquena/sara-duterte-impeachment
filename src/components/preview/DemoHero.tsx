
import { useTheme } from "@/contexts/ThemeContext";
import { ArrowRight, Play } from "lucide-react";

export const DemoHero = () => {
  const { settings } = useTheme();

  return (
    <section className="py-20 px-4">
      <div 
        className="container mx-auto text-center"
        style={{ maxWidth: `${settings.containerWidth}px` }}
      >
        <h1 className="text-5xl font-bold mb-6">
          Beautiful WordPress Themes
          <br />
          <span style={{ color: settings.primaryColor }}>
            Built for Everyone
          </span>
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">
          Create stunning websites with our professionally designed WordPress themes. 
          Fully customizable, responsive, and built with modern web standards.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            className="px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: settings.primaryColor,
              borderRadius: `${settings.borderRadius}px`
            }}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <button 
            className="px-8 py-3 rounded-lg font-semibold border-2 flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ 
              borderColor: settings.primaryColor,
              color: settings.primaryColor,
              borderRadius: `${settings.borderRadius}px`
            }}
          >
            <Play className="h-4 w-4" />
            Watch Demo
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Responsive Design", desc: "Works perfectly on all devices" },
            { title: "Easy Customization", desc: "Visual editor with live preview" },
            { title: "SEO Optimized", desc: "Built with best practices in mind" }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border" style={{ borderRadius: `${settings.borderRadius}px` }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: settings.primaryColor }}>
                {feature.title}
              </h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
