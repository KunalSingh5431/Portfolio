"use client";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography, Container, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import "../styles/education.css"; // 👈 Make sure this file exists

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Elitte College of Engineering",
      date: "2021 - 2025",
      CGPA: "9.04",
      img: s1,
      details:
        "Completed graduation with a strong foundation in computer science. Now focused on advancing my career by building real-world skills in web development, machine learning, and software engineering through hands-on projects and continuous learning.",
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Sailendra Sircar Vidyalaya",
      date: "2019 - 2021",
      Percentage: "79.4%",
      img: s2,
      details:
        "Studied Physics, Chemistry, and Mathematics with emphasis on developing analytical thinking, logical reasoning, and problem-solving abilities.",
    },
    {
      degree: "Secondary (X)",
      institution: "Sailendra Sircar Vidyalaya",
      date: "2018 - 2019",
      Percentage: "78.4%",
      img: s2,
      details:
        "Completed foundational education focusing on core academic subjects, especially Mathematics and Science, to prepare for technical learning ahead.",
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
        py: 10,
        px: 2,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          fontWeight={800}
          sx={{
            background: "linear-gradient(to right, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          EDUCATION
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#607d8b",
            mb: 6,
            letterSpacing: 0.5,
            fontStyle: "italic",
          }}
        >
          A journey of learning, growth, and technical mastery.
        </Typography>

        <VerticalTimeline lineColor="#00acc1">
          {education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #00acc1" }}
              date={item.date}
              dateClassName="custom-date" // 👈 date class added
              iconStyle={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                //padding: "4px",
                borderRadius: "50%",
                //boxShadow: "0 0 0 4px #e0f7fa",
              }}
              icon={
                <Box
                  sx={{
                    border: "4px solid transparent",
                    //borderImage: "linear-gradient(135deg, #667eea, #764ba2)",
                    borderImageSlice: 1,
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    alt={item.institution}
                    style={{ objectFit: "cover" }}
                    src={item.img}
                  />
                </Box>
              }
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  {item.degree}
                </Typography>

                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  sx={{ fontStyle: "italic", color: "#fff" }}
                >
                  {item.institution}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                    color: "#fff",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.details}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    fontStyle: "italic",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  {item.CGPA
                    ? `CGPA: ${item.CGPA}`
                    : item.Percentage
                    ? `Percentage: ${item.Percentage}`
                    : ""}
                </Typography>
              </Box>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Box>
  );
};

export default Education;
