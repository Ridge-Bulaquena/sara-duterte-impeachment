
import React from 'react';

export const NewsTicker: React.FC = () => {
  const newsItems = [
    "BREAKING: Senate schedules impeachment hearing for January 15, 2024",
    "Legal experts debate constitutional grounds for impeachment proceedings",
    "VP Sara Duterte's legal team files motion to dismiss charges",
    "House votes 187-32 to forward impeachment complaint to Senate",
    "Constitutional law scholars weigh in on due process requirements",
    "Senate President announces 20-day timeline for impeachment trial"
  ];

  return (
    <div className="w-full py-4 overflow-hidden" style={{ backgroundColor: '#6B1F1F' }}>
      <div className="flex items-center">
        <div className="flex-shrink-0 px-6 py-2 font-bold text-lg" style={{ 
          backgroundColor: '#F7FAFC',
          color: '#6B1F1F',
          fontFamily: 'Figtree, sans-serif'
        }}>
          LATEST NEWS
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-2">
            <span className="text-lg font-medium" style={{ 
              color: '#F7FAFC',
              fontFamily: 'Figtree, sans-serif'
            }}>
              {newsItems.map((item, index) => (
                <span key={index} className="mx-8">
                  {item}
                  <span className="mx-4" style={{ color: '#b5a58a' }}>•</span>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
};
