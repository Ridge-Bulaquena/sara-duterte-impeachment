
import React from 'react';
import { Scale, Clock, Gavel } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#2D3748', minHeight: '90vh' }}>
      {/* Revolution Slider Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-center" style={{ color: '#A0AEC0' }}>
            <div className="text-6xl mb-4">
              <Gavel className="mx-auto" />
            </div>
            <p className="text-2xl font-medium" style={{ fontFamily: 'Figtree, sans-serif' }}>
              7-Slide Revolution Slider Placeholder
            </p>
            <p className="text-lg mt-2 opacity-75">
              Dramatic visuals with layered typography will be implemented here
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ 
              fontFamily: 'Blacker Display, serif',
              color: '#F7FAFC',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>
              The Impeachment of
            </h1>
            <h2 className="text-6xl lg:text-7xl font-light italic mb-8" style={{ 
              fontFamily: 'Blacker Display, serif',
              color: '#b5a58a',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>
              Vice President Sara Duterte
            </h2>
          </div>

          <p className="text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ 
            fontFamily: 'Figtree, sans-serif',
            color: '#F7FAFC',
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
          }}>
            A comprehensive legal analysis of constitutional law, due process, and political accountability in the Philippines
          </p>

          {/* Trial Countdown Component */}
          <div className="inline-block p-8 rounded-2xl border-2 backdrop-blur-sm" style={{ 
            backgroundColor: 'rgba(247, 250, 252, 0.1)',
            borderColor: '#b5a58a'
          }}>
            <div className="flex items-center justify-center mb-4">
              <Clock className="mr-3 text-3xl" style={{ color: '#b5a58a' }} />
              <h3 className="text-3xl font-semibold" style={{ 
                fontFamily: 'Blacker Display, serif',
                color: '#F7FAFC'
              }}>
                Trial Countdown
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold" style={{ color: '#b5a58a', fontFamily: 'Figtree, sans-serif' }}>45</div>
                <div className="text-lg" style={{ color: '#F7FAFC', fontFamily: 'Figtree, sans-serif' }}>Days</div>
              </div>
              <div>
                <div className="text-4xl font-bold" style={{ color: '#b5a58a', fontFamily: 'Figtree, sans-serif' }}>12</div>
                <div className="text-lg" style={{ color: '#F7FAFC', fontFamily: 'Figtree, sans-serif' }}>Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold" style={{ color: '#b5a58a', fontFamily: 'Figtree, sans-serif' }}>34</div>
                <div className="text-lg" style={{ color: '#F7FAFC', fontFamily: 'Figtree, sans-serif' }}>Minutes</div>
              </div>
              <div>
                <div className="text-4xl font-bold" style={{ color: '#b5a58a', fontFamily: 'Figtree, sans-serif' }}>56</div>
                <div className="text-lg" style={{ color: '#F7FAFC', fontFamily: 'Figtree, sans-serif' }}>Seconds</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t" style={{ borderColor: '#A0AEC0' }}>
              <p className="text-xl font-medium" style={{ 
                color: '#F7FAFC',
                fontFamily: 'Figtree, sans-serif'
              }}>
                Next Senate Session: January 15, 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute top-10 right-10 opacity-20">
        <Scale size={120} style={{ color: '#b5a58a' }} />
      </div>
    </section>
  );
};
