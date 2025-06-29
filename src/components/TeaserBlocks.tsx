
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Zap, Activity, ArrowRight } from 'lucide-react';

export const TeaserBlocks: React.FC = () => {
  const teasers = [
    {
      icon: <BookOpen size={48} />,
      title: "Legal Glossary",
      description: "Interactive definitions of impeachment terms, constitutional law concepts, and legal procedures explained in plain language.",
      action: "Explore Definitions",
      color: "#6e5d3f"
    },
    {
      icon: <Zap size={48} />,
      title: "Explainers Hub", 
      description: "In-depth breakdowns of complex legal concepts, constitutional provisions, and procedural requirements in the impeachment process.",
      action: "Read Explainers",
      color: "#4A5568"
    },
    {
      icon: <Activity size={48} />,
      title: "Live Trial Tracker",
      description: "Real-time updates on proceedings, witness testimonies, legal motions, and key developments in the impeachment trial.",
      action: "Track Progress",
      color: "#6B1F1F"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#2D3748' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ 
            fontFamily: 'Blacker Display, serif',
            color: '#F7FAFC'
          }}>
            Essential Resources
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ 
            fontFamily: 'Figtree, sans-serif',
            color: '#A0AEC0'
          }}>
            Navigate the complexities of impeachment law with our comprehensive educational tools
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {teasers.map((teaser, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 h-full" 
                  style={{ 
                    backgroundColor: '#F7FAFC',
                    borderColor: teaser.color,
                    borderRadius: '16px'
                  }}>
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-6 p-4 rounded-full inline-block" style={{ 
                  backgroundColor: `${teaser.color}20`,
                  color: teaser.color
                }}>
                  {teaser.icon}
                </div>
                <CardTitle className="text-3xl font-semibold" style={{ 
                  fontFamily: 'Blacker Display, serif',
                  color: '#2D3748'
                }}>
                  {teaser.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-8 flex flex-col justify-between h-full">
                <p className="text-lg leading-relaxed" style={{ 
                  fontFamily: 'Figtree, sans-serif',
                  color: '#4A5568',
                  lineHeight: '1.7'
                }}>
                  {teaser.description}
                </p>
                <Button 
                  className="group-hover:shadow-lg transition-all duration-200 font-semibold px-8 py-3 text-lg flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: teaser.color,
                    color: '#F7FAFC',
                    fontFamily: 'Figtree, sans-serif'
                  }}
                >
                  {teaser.action}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
