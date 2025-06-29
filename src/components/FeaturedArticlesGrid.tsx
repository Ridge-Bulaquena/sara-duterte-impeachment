
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface Article {
  title: string;
  summary: string;
  slug: string;
}

interface FeaturedArticlesGridProps {
  proArticles?: Article[];
  antiArticles?: Article[];
}

const defaultProArticles: Article[] = [
  {
    title: "Constitutional Grounds for Defense",
    summary: "Legal scholars examine the constitutional protections and procedural requirements that may shield VP Sara from impeachment proceedings.",
    slug: "constitutional-defense-grounds"
  },
  {
    title: "Due Process and Fair Trial Rights",
    summary: "Analysis of Sara Duterte's fundamental rights under the Constitution and how they apply to impeachment proceedings.",
    slug: "due-process-fair-trial"
  },
  {
    title: "Political Motivation Arguments",
    summary: "Examining claims that the impeachment is politically motivated rather than based on legitimate constitutional grounds.",
    slug: "political-motivation-claims"
  }
];

const defaultAntiArticles: Article[] = [
  {
    title: "Evidence of High Crimes",
    summary: "Documented evidence and testimonies that support the impeachment charges against Vice President Sara Duterte.",
    slug: "evidence-high-crimes"
  },
  {
    title: "Constitutional Violations Alleged",
    summary: "Legal analysis of specific constitutional provisions allegedly violated and their implications for impeachment.",
    slug: "constitutional-violations"
  },
  {
    title: "Precedent and Legal Standards",
    summary: "Historical precedents and legal standards that support the impeachment case against the Vice President.",
    slug: "legal-precedents"
  }
];

export const FeaturedArticlesGrid: React.FC<FeaturedArticlesGridProps> = ({
  proArticles = defaultProArticles,
  antiArticles = defaultAntiArticles
}) => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F7FAFC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ 
            fontFamily: 'Blacker Display, serif',
            color: '#2D3748',
            fontWeight: 600
          }}>
            Legal Analysis & Perspectives
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ 
            fontFamily: 'Figtree, sans-serif',
            color: '#4A5568',
            lineHeight: '1.7'
          }}>
            Comprehensive examination of the impeachment case from multiple legal viewpoints
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Pro Defense Column */}
          <div className="space-y-8">
            <div className="text-center pb-6 border-b-2" style={{ borderColor: '#b5a58a' }}>
              <h3 className="text-3xl font-semibold mb-3" style={{ 
                fontFamily: 'Blacker Display, serif',
                color: '#6e5d3f'
              }}>
                In Defense of VP Sara
              </h3>
              <div className="w-32 h-1 mx-auto" style={{ backgroundColor: '#b5a58a' }}></div>
            </div>
            
            <div className="space-y-8">
              {proArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2" 
                      style={{ 
                        backgroundColor: '#c4bba9', 
                        borderColor: '#b5a58a',
                        borderRadius: '12px'
                      }}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-semibold leading-tight" style={{ 
                      fontFamily: 'Blacker Display, serif',
                      color: '#2D3748'
                    }}>
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-lg leading-relaxed" style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#4A5568',
                      lineHeight: '1.7'
                    }}>
                      {article.summary}
                    </CardDescription>
                    <Button 
                      className="font-semibold px-8 py-3 text-lg transition-all duration-200 hover:shadow-lg"
                      style={{ 
                        backgroundColor: '#6e5d3f',
                        color: '#F7FAFC',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      Read Analysis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Anti/Prosecution Column */}
          <div className="space-y-8">
            <div className="text-center pb-6 border-b-2" style={{ borderColor: '#6B1F1F' }}>
              <h3 className="text-3xl font-semibold mb-3" style={{ 
                fontFamily: 'Blacker Display, serif',
                color: '#6B1F1F'
              }}>
                The Case for Impeachment
              </h3>
              <div className="w-32 h-1 mx-auto" style={{ backgroundColor: '#6B1F1F' }}></div>
            </div>
            
            <div className="space-y-8">
              {antiArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2" 
                      style={{ 
                        backgroundColor: '#F7FAFC', 
                        borderColor: '#6B1F1F',
                        borderRadius: '12px'
                      }}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-semibold leading-tight" style={{ 
                      fontFamily: 'Blacker Display, serif',
                      color: '#2D3748'
                    }}>
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-lg leading-relaxed" style={{ 
                      fontFamily: 'Figtree, sans-serif',
                      color: '#4A5568',
                      lineHeight: '1.7'
                    }}>
                      {article.summary}
                    </CardDescription>
                    <Button 
                      className="font-semibold px-8 py-3 text-lg transition-all duration-200 hover:shadow-lg"
                      style={{ 
                        backgroundColor: '#6B1F1F',
                        color: '#F7FAFC',
                        fontFamily: 'Figtree, sans-serif'
                      }}
                    >
                      Read Analysis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesGrid;
