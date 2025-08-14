import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { Code } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg" },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 900,
              mb: 1,
              letterSpacing: 2,
              background: "linear-gradient(to right, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
            }}
          >
            About Me
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 5, fontStyle: "italic" }}
          >
            Get to know who I am, what I do, and what I bring to the table
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Left Side Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.08)",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.9, fontSize: "1.05rem" }}
                >
                  I'm <strong>Kunal Singh</strong>, a B.Tech graduate in Computer Science and Engineering from <em>Elitte College of Engineering, Kolkata</em>.<br />
                  I'm passionate about <strong>software development</strong>, <strong>problem-solving</strong>, and enjoy turning ideas into real-world applications. I have hands-on experience with full-stack development using technologies like React, Node.js, MongoDB, and Express.<br />
                  I've successfully completed training in <strong>Machine Learning</strong> from <em>Euphoria Genex</em>, and I'm always eager to expand my knowledge by learning and applying new technologies.<br />
                  Outside of tech, I enjoy <strong>public speaking</strong>, participating in <strong>hackathons</strong>, and embracing continuous learning to grow both personally and professionally.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Side - Skills */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Code sx={{ fontSize: 40, color: "white", mr: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 1,
                      color: "white",
                      textTransform: "uppercase",
                    }}
                  >
                    Skills & Technologies
                  </Typography>
                </Box>

                {/* Skills Grid */}
                <Grid container spacing={2}>
                  {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} key={skill.name}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: "#ffffff",
                            boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: 110,
                            width: 110,
                            transition: "transform 0.4s ease",
                            "&:hover": {
                              transform: "translateY(-6px)",
                            },
                          }}
                        >
                          <Avatar
                            src={skill.icon}
                            alt={skill.name}
                            sx={{
                              width: 50,
                              height: 50,
                              mb: 1,
                              backgroundColor: "transparent",
                            }}
                            variant="square"
                          />
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, textAlign: "center" }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
