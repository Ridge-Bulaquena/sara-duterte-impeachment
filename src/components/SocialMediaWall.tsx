
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Twitter, Facebook, Instagram, MessageCircle } from 'lucide-react';

export const SocialMediaWall: React.FC = () => {
  const socialPosts = [
    {
      platform: 'twitter',
      icon: <Twitter size={24} />,
      user: '@LegalExpert_PH',
      content: 'The constitutional precedent here is clear. Due process must be followed regardless of political pressure. #StandWithSara #Constitution',
      timestamp: '2 hours ago'
    },
    {
      platform: 'facebook',
      icon: <Facebook size={24} />,
      user: 'Philippine Law Students Assoc.',
      content: 'Studying the impeachment process has never been more relevant. This case will be in textbooks. #StandWithSara #LegalEducation',
      timestamp: '4 hours ago'
    },
    {
      platform: 'instagram',
      icon: <Instagram size={24} />,
      user: '@ConstitutionalLawyer',
      content: 'The separation of powers doctrine is being tested. Historical moment for Philippine democracy. #StandWithSara #Democracy',
      timestamp: '6 hours ago'
    },
    {
      platform: 'twitter',
      icon: <Twitter size={24} />,
      user: '@PoliticalScience_UP',
      content: 'Academic perspective: This impeachment case raises fascinating questions about executive accountability. #StandWithSara #PolSci',
      timestamp: '8 hours ago'
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ 
            fontFamily: 'Blacker Display, serif',
            color: '#2D3748'
          }}>
            Social Discourse
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-semibold" style={{ 
              fontFamily: 'Blacker Display, serif',
              color: '#6B1F1F'
            }}>
              #StandWithSara
            </span>
            <MessageCircle style={{ color: '#6B1F1F' }} size={32} />
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ 
            fontFamily: 'Figtree, sans-serif',
            color: '#4A5568'
          }}>
            Join the conversation - legal experts, students, and citizens discussing constitutional law and democratic processes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {socialPosts.map((post, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300" 
                  style={{ 
                    backgroundColor: '#F7FAFC',
                    borderColor: '#A0AEC0',
                    borderRadius: '12px'
                  }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full" style={{ 
                    backgroundColor: post.platform === 'twitter' ? '#1DA1F2' : 
                                   post.platform === 'facebook' ? '#1877F2' : '#E4405F',
                    color: '#F7FAFC'
                  }}>
                    {post.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-lg" style={{ 
                        fontFamily: 'Figtree, sans-serif',
                        color: '#2D3748'
                      }}>
                        {post.user}
                      </span>
                      <span className="text-sm" style={{ 
                        fontFamily: 'Figtree, sans-serif',
                        color: '#A0AEC0'
                      }}>
                        {post.timestamp}
                      </span>
                    </div>
                    <p className="text-lg leading-relaxed" style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#4A5568',
                      lineHeight: '1.6'
                    }}>
                      {post.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg mb-6" style={{ 
            fontFamily: 'Figtree, sans-serif',
            color: '#4A5568'
          }}>
            Share your perspective on constitutional law and democratic processes
          </p>
          <div className="flex justify-center gap-6">
            <div className="p-3 rounded-full cursor-pointer hover:shadow-lg transition-all" style={{ backgroundColor: '#1DA1F2' }}>
              <Twitter style={{ color: '#F7FAFC' }} size={28} />
            </div>
            <div className="p-3 rounded-full cursor-pointer hover:shadow-lg transition-all" style={{ backgroundColor: '#1877F2' }}>
              <Facebook style={{ color: '#F7FAFC' }} size={28} />
            </div>
            <div className="p-3 rounded-full cursor-pointer hover:shadow-lg transition-all" style={{ backgroundColor: '#E4405F' }}>
              <Instagram style={{ color: '#F7FAFC' }} size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
