"use client";
import { Box, IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showBackToTop) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={scrollToTop}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: 56,
          height: 56,
          boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "primary.dark",
            transform: "translateY(-3px)",
            boxShadow: "0 8px 30px rgba(37, 99, 235, 0.4)",
          },
        }}
      >
        <KeyboardArrowUp />
      </IconButton>
    </Box>
  );
}
