
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeSettings {
  siteName: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  headerStyle: 'default' | 'centered' | 'split';
  fontSize: number;
  fontFamily: string;
  headingFont: string;
  headerHeight: number;
  containerWidth: number;
  borderRadius: number;
  // Sara Duterte Impeachment Hub specific colors
  deepSlateBase: string;
  mutedGold1: string;
  mutedGold2: string;
  deepGold: string;
  lightTan: string;
  offWhite: string;
  softSlateBlue: string;
  dividerGray: string;
  highlightCrimson: string;
}

interface ThemeContextType {
  settings: ThemeSettings;
  updateSettings: (newSettings: Partial<ThemeSettings>) => void;
}

const defaultSettings: ThemeSettings = {
  siteName: 'Sara Duterte Impeachment Hub',
  primaryColor: '#2D3748', // Deep Slate Base
  secondaryColor: '#b5a58a', // Muted Gold 1
  backgroundColor: '#F7FAFC', // Off-White
  textColor: '#2D3748', // Deep Slate Base
  headerStyle: 'default',
  fontSize: 16,
  fontFamily: 'Figtree',
  headingFont: 'Blacker Display',
  headerHeight: 80,
  containerWidth: 1200,
  borderRadius: 4,
  // Sara Duterte Impeachment Hub colors
  deepSlateBase: '#2D3748',
  mutedGold1: '#b5a58a',
  mutedGold2: '#8c7b5e',
  deepGold: '#6e5d3f',
  lightTan: '#c4bba9',
  offWhite: '#F7FAFC',
  softSlateBlue: '#4A5568',
  dividerGray: '#A0AEC0',
  highlightCrimson: '#6B1F1F',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<ThemeSettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<ThemeSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <ThemeContext.Provider value={{ settings, updateSettings }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
