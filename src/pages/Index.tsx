
import React from 'react';
import { ThemeHeader } from '../components/ThemeHeader';
import { ThemePreview } from '../components/ThemePreview';
import { CustomizationSidebar } from '../components/CustomizationSidebar';
import { HeroSection } from '../components/HeroSection';
import { NewsTicker } from '../components/NewsTicker';
import { FeaturedArticlesGrid } from '../components/FeaturedArticlesGrid';
import { TeaserBlocks } from '../components/TeaserBlocks';
import { SubscribeCTA } from '../components/SubscribeCTA';
import { SocialMediaWall } from '../components/SocialMediaWall';
import { SarasStoryTeaser } from '../components/SarasStoryTeaser';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#F7FAFC' }}>
        {/* Keep existing theme customizer in background */}
        <div className="hidden">
          <ThemeHeader />
          <div className="flex h-[calc(100vh-64px)]">
            <CustomizationSidebar />
            <main className="flex-1 overflow-hidden">
              <ThemePreview />
            </main>
          </div>
        </div>

        {/* New Legal Education Homepage */}
        <main className="w-full">
          <HeroSection />
          <NewsTicker />
          <FeaturedArticlesGrid />
          <TeaserBlocks />
          <SubscribeCTA />
          <SocialMediaWall />
          <SarasStoryTeaser />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
