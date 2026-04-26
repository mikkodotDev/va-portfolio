import { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { useTheme } from "../hooks/useTheme";

export function Header({ scrollTo }) {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navigation
      scrolled={scrolled}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      scrollTo={scrollTo}
    />
  );
}
