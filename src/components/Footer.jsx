"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import logo1 from "../assets/logo1.png";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1f2937", // Tailwind's gray-800
        color: "white",
        py: 6,
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Logo and Name */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                alt="Logo"
                src={logo1}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "transparent",
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Kunal Singh
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                 Computer Science Engineer | Full Stack Developer 
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Icons */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                gap: 2,
              }}
            >
              <IconButton
                component="a"
                href="https://github.com/KunalSingh5431"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#fbbf24" } }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/kunalsingh5431"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#fbbf24" } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:kunalsingh5431@gmail.com"
                sx={{ color: "white", "&:hover": { color: "#fbbf24" } }}
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        />

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.6, fontSize: "0.875rem" }}
        >
          © {new Date().getFullYear()} Kunal Singh. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
