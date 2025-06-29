
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Bell } from 'lucide-react';

export const SubscribeCTA: React.FC = () => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#c4bba9' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="mx-auto mb-6 p-4 rounded-full inline-block" style={{ 
            backgroundColor: '#2D3748',
            color: '#b5a58a'
          }}>
            <Bell size={48} />
          </div>
          <h2 className="text-5xl font-bold mb-6" style={{ 
            fontFamily: 'Blacker Display, serif',
            color: '#2D3748'
          }}>
            Stay Informed
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ 
            fontFamily: 'Figtree, sans-serif',
            color: '#4A5568',
            lineHeight: '1.7'
          }}>
            Get real-time updates on the impeachment proceedings, legal analysis, and expert commentary delivered directly to your inbox.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#4A5568' }} size={20} />
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="pl-12 py-4 text-lg border-2 rounded-xl"
              style={{ 
                borderColor: '#6e5d3f',
                fontFamily: 'Figtree, sans-serif',
                backgroundColor: '#F7FAFC'
              }}
            />
          </div>
          <Button 
            className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:shadow-lg"
            style={{ 
              backgroundColor: '#2D3748',
              color: '#F7FAFC',
              fontFamily: 'Figtree, sans-serif'
            }}
          >
            Subscribe Now
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#6e5d3f', fontFamily: 'Figtree, sans-serif' }}>
              Daily
            </div>
            <p style={{ fontFamily: 'Figtree, sans-serif', color: '#4A5568' }}>
              Legal Updates
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#6e5d3f', fontFamily: 'Figtree, sans-serif' }}>
              Expert
            </div>
            <p style={{ fontFamily: 'Figtree, sans-serif', color: '#4A5568' }}>
              Analysis
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#6e5d3f', fontFamily: 'Figtree, sans-serif' }}>
              Breaking
            </div>
            <p style={{ fontFamily: 'Figtree, sans-serif', color: '#4A5568' }}>
              News Alerts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
