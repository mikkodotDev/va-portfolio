import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const lightTheme = {
  text: "#050a0a",
  background: "#f1f8f9",
  primary: "#47a1a9",
  secondary: "#7b8bc0",
  accent: "#6b5eb5",
  // Derived colors for cards and UI elements
  cardBg: "#e8f0f2",
  cardBorder: "#c5dfe4",
  mutedText: "#4a6b70",
  darkMutedText: "#356570",
  inputBg: "#ffffff",
  inputBorder: "#b3cfd4",
};

export const darkTheme = {
  text: "#f5fafa",
  background: "#060d0e",
  primary: "#5fc5ce",
  secondary: "#8fa3e6",
  accent: "#9b8dd9",
  // Derived colors for cards and UI elements
  cardBg: "#0f1617",
  cardBorder: "#1a2527",
  mutedText: "#9eb5bc",
  darkMutedText: "#7a9aab",
  inputBg: "#0f1617",
  inputBorder: "#1a2527",
};

// Determine if it's daytime based on current hour
// Light mode: 6 AM to 6 PM (6:00 to 18:00)
// Dark mode: 6 PM to 6 AM (18:00 to 6:00)
function isCurrentlyDaytime() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return !isCurrentlyDaytime();
  });

  useEffect(() => {
    // Update theme based on current time
    setIsDarkMode(!isCurrentlyDaytime());

    // Check every minute if we need to switch themes
    const interval = setInterval(() => {
      setIsDarkMode(!isCurrentlyDaytime());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;
  const value = {
    ...theme,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: theme.background,
          color: theme.text,
          minHeight: "100vh",
          overflowX: "hidden",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}
