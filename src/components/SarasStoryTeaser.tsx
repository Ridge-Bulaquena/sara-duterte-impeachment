
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Clock, User, ArrowRight } from 'lucide-react';

export const SarasStoryTeaser: React.FC = () => {
  const timelineEvents = [
    {
      year: '1978',
      event: 'Born in Davao City',
      description: 'Early life and family background'
    },
    {
      year: '2007',
      event: 'Mayor of Davao City',
      description: 'Beginning of political career'
    },
    {
      year: '2022',
      event: 'Vice President Election',
      description: 'Historic victory and national leadership'
    },
    {
      year: '2024',
      event: 'Impeachment Proceedings',
      description: 'Constitutional crisis unfolds'
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#2D3748' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <User size={48} style={{ color: '#b5a58a' }} />
              <h2 className="text-5xl font-bold" style={{ 
                fontFamily: 'Blacker Display, serif',
                color: '#F7FAFC'
              }}>
                Sara's Story
              </h2>
            </div>
            <p className="text-2xl mb-8 leading-relaxed" style={{ 
              fontFamily: 'Figtree, sans-serif',
              color: '#A0AEC0',
              lineHeight: '1.7'
            }}>
              From Davao City Mayor to Vice President - trace the political journey that led to this historic constitutional moment.
            </p>
            <p className="text-xl mb-12 leading-relaxed" style={{ 
              fontFamily: 'Figtree, sans-serif',
              color: '#A0AEC0',
              lineHeight: '1.6'
            }}>
              Explore the key decisions, political alliances, and policy positions that shaped her career and ultimately led to the impeachment proceedings.
            </p>
            <Button 
              className="px-10 py-4 text-xl font-semibold rounded-xl transition-all duration-200 hover:shadow-lg flex items-center gap-4"
              style={{ 
                backgroundColor: '#b5a58a',
                color: '#2D3748',
                fontFamily: 'Figtree, sans-serif'
              }}
            >
              Explore Full Timeline
              <ArrowRight size={24} />
            </Button>
          </div>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="border-l-4 hover:shadow-xl transition-all duration-300" 
                    style={{ 
                      backgroundColor: '#F7FAFC',
                      borderLeftColor: '#b5a58a',
                      borderRadius: '12px'
                    }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold" 
                           style={{ 
                             backgroundColor: '#b5a58a',
                             color: '#2D3748',
                             fontFamily: 'Figtree, sans-serif'
                           }}>
                        {event.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2" style={{ 
                        fontFamily: 'Blacker Display, serif',
                        color: '#2D3748'
                      }}>
                        {event.event}
                      </h3>
                      <p className="text-lg" style={{ 
                        fontFamily: 'Figtree, sans-serif',
                        color: '#4A5568'
                      }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
