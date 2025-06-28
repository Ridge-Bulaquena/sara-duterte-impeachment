
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
    title: "Sara's Leadership Vision",
    summary: "An in-depth analysis of Sara's progressive policies and their potential impact on economic growth and social equality.",
    slug: "sara-leadership-vision"
  },
  {
    title: "Community Support Stories",
    summary: "Real testimonials from community members who have benefited from Sara's grassroots initiatives and local programs.",
    slug: "community-support-stories"
  },
  {
    title: "Policy Innovation Spotlight",
    summary: "Breaking down Sara's innovative approaches to healthcare, education, and environmental sustainability.",
    slug: "policy-innovation-spotlight"
  }
];

const defaultAntiArticles: Article[] = [
  {
    title: "Economic Concerns Raised",
    summary: "Critical examination of the potential economic implications and fiscal responsibility questions surrounding current proposals.",
    slug: "economic-concerns-raised"
  },
  {
    title: "Alternative Perspectives",
    summary: "Exploring different viewpoints and alternative solutions to address the same challenges facing our community.",
    slug: "alternative-perspectives"
  },
  {
    title: "Implementation Challenges",
    summary: "Analyzing potential obstacles and practical difficulties in executing proposed policy changes and reforms.",
    slug: "implementation-challenges"
  }
];

export const FeaturedArticlesGrid: React.FC<FeaturedArticlesGridProps> = ({
  proArticles = defaultProArticles,
  antiArticles = defaultAntiArticles
}) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Figtree, sans-serif' }}>
          Featured Articles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Figtree, sans-serif' }}>
          Explore different perspectives on the issues that matter most
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Pro Side - In Defense of Sara */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2" style={{ fontFamily: 'Figtree, sans-serif' }}>
              In Defense of Sara
            </h3>
            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {proArticles.map((article, index) => (
              <Card key={index} className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Figtree, sans-serif' }}>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Figtree, sans-serif' }}>
                    {article.summary}
                  </CardDescription>
                  <Button 
                    variant="default" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Anti Side - The Case Against Her */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-red-700 mb-2" style={{ fontFamily: 'Figtree, sans-serif' }}>
              The Case Against Her
            </h3>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {antiArticles.map((article, index) => (
              <Card key={index} className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Figtree, sans-serif' }}>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Figtree, sans-serif' }}>
                    {article.summary}
                  </CardDescription>
                  <Button 
                    variant="default" 
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2"
                    style={{ fontFamily: 'Figtree, sans-serif' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesGrid;
