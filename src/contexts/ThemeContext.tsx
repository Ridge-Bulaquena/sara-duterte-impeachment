
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
  headerHeight: number;
  containerWidth: number;
  borderRadius: number;
}

interface ThemeContextType {
  settings: ThemeSettings;
  updateSettings: (newSettings: Partial<ThemeSettings>) => void;
}

const defaultSettings: ThemeSettings = {
  siteName: 'Kadence Crafted',
  primaryColor: '#3B82F6',
  secondaryColor: '#1E40AF',
  backgroundColor: '#FFFFFF',
  textColor: '#1F2937',
  headerStyle: 'default',
  fontSize: 16,
  fontFamily: 'Inter',
  headerHeight: 80,
  containerWidth: 1200,
  borderRadius: 8,
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
