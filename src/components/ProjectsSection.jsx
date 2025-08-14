"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { motion } from "framer-motion"; // Animation library
import p11 from "../assets/p11.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SmartPDF - Summarize and Listen to Your PDFs",
      description: "AI-powered PDF summarizer with text-to-speech built using MERN stack.",
      image: p11,
      technologies: ["React", "Express", "MongoDB", "Material-UI", "Gemini-API", "Postman"],
      github: "https://github.com/KunalSingh5431/smartPDF",
      demo: "https://smartpdf-bybv.onrender.com/",
    },
    {
      title: "Sentiva - A Sentiment Analysis Web App",
      description:
        "A React + Express + Python (NLTK) based Sentiment Analysis Web App that predicts emotions from text input.",
      image: p2,
      technologies: ["React", "Express", "Material UI", "Python", "NLTK", "joblib"],
      github: "https://github.com/KunalSingh5431/Sentiment_Analysis",
      demo: "https://sentiment-analysis-nfi2.onrender.com/",
    },
    {
      title: "Heart Disease Prediction System",
      description:
        "Predict the likelihood of heart disease using ML based on health metrics. Built using Streamlit and Python.",
      image: p3,
      technologies: ["Python", "Streamlit", "Numpy", "Matplotlib", "Pandas", "joblib"],
      github: "https://github.com/KunalSingh5431/Heart-Disease-Prediction-system",
      demo: "https://heart-disease-predict-system.streamlit.app/",
    },
    {
      title: "Fitverse",
      description:
        "Explore exercises by body parts & equipment. Fitness web app built with modern UI and public APIs.",
      image: p4,
      technologies: ["React", "Material-UI", "CSS", "API Integration"],
      github: "https://github.com/KunalSingh5431/FitVerse",
      demo: "https://fit-verse.netlify.app/",
    },
    {
      title: "Foodie - Your Favorite Meals, Just a Click Away",
      description: "Full-stack food ordering web app for browsing and ordering delicious meals.",
      image: p5,
      technologies: ["React", "Express", "MongoDB", "Material-UI", "API Integration", "Postman"],
      github: "https://github.com/KunalSingh5431/Foodie",
      demo: "https://foodie-8h1h.onrender.com/",
    },
    {
      title: "Weather Web-App",
      description:
        "Simple yet elegant app to check real-time weather for any city using external weather APIs.",
      image: p6,
      technologies: ["React", "CSS", "API Integration"],
      github: "https://github.com/KunalSingh5431/Weather",
      demo: "https://kunalsingh5431.github.io/Weather/",
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#f3f4f6",
      }}
    >
      <Container maxWidth="lg">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              color: "white",
              textShadow: "0 2px 10px rgba(144,202,249,0.2)",
            }}
          >
            FEATURED PROJECTS
          </Typography>
        </motion.div>

        {/* Animated Subheading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: "#cfd8dc",
              fontWeight: 400,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            Here are some of the cool projects I've worked on — from machine learning models to full-stack web apps using cutting-edge tech.
          </Typography>
        </motion.div>

        {/* Project Cards */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    width: "560px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#f4f6f8",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
                    borderRadius: 1,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#263238",
                        mb: 1,
                        fontSize: "1.25rem",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: "#455a64",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            fontSize: "0.75rem",
                            backgroundColor: "#263238",
                            color: "#90caf9",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#37474f",
                              transform: "scale(1.1)",
                              textShadow: "0 0 6px #90caf9",
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                      <IconButton
                        href={project.github}
                        target="_blank"
                        sx={{
                          backgroundColor: "#37474f",
                          color: "#90caf9",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#546e7a",
                            color: "#fff",
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        href={project.demo}
                        target="_blank"
                        sx={{
                          backgroundColor: "#37474f",
                          color: "#90caf9",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#546e7a",
                            color: "#fff",
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        <Launch />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
