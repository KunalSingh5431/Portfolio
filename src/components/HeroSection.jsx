import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Toolbar,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import profile from "../assets/profile.png";
import logo1 from "../assets/logo1.png";
import  { ReactTyped } from "react-typed";

export default function HeroSection({ scrollToSection }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        pt: 0,
        pb: 8,
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      {/* Navigation Bar - Transparent, Inside Hero */}
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "lg",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 0 },
          pt: 2,
          position: "relative",
          zIndex: 10,
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
        <Avatar
                alt="Logo"
                src={logo1}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "transparent",
                }}
              />
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["About", "Projects", "Education", "Contact"].map((item) => (
            <Button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            sx={{
              color: "white",
              fontWeight: 700,
              borderRadius: "20px",
              px: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fbbf24",
                color: "#1e293b",
              },
            }}
          >
            {item}
          </Button>
          ))}
        </Box>
      </Toolbar>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ color: "white", mt: { xs: 4, md: 10 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" },
                  mb: 1,
                }}
              >
                Hi, I'm{" "}
                <Box component="span" sx={{ color: "#fbbf24" }}>
                  Kunal Singh
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  opacity: 0.95,
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Computer Science Engineer | Full Stack Web Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#fbbf24" ,
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: 800,
                  lineHeight: 1.7,
                  fontWeight:700,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                <ReactTyped
                  strings={[
                    "Turning ideas into impactful digital experiences one line of code at a time.",
                    "Crafting elegant, functional, and scalable web solutions.",
                    "Where creativity meets clean, efficient code.",
                    "Building the future pixel by pixel, feature by feature.",
                  ]}
                  typeSpeed={40}
                  backSpeed={20}
                  loop
                />
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href="https://drive.google.com/file/d/1AJB64sGXMpwCtxykI9S5tsLskBuhLd4t/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "25px",
                    px: 4,
                    py: 1.5,
                    backgroundColor: "#fbbf24",
                    color: "#1e293b",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#f59e0b" },
                  }}
                >
                  View My Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    borderRadius: "25px",
                    px: 4,
                    py: 1.5,
                    borderColor: "white",
                    color: "white",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "#fbbf24",
                      backgroundColor: "rgba(251, 191, 36, 0.1)",
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>

              {/* Social Icons */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  href="https://github.com/KunalSingh5431"
                  sx={{ color: "white", "&:hover": { color: "#fbbf24" } }}
                >
                  <GitHub sx={{ fontSize: "2rem" }} />
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/kunal-singh-162467242/"
                  sx={{ color: "white", "&:hover": { color: "#fbbf24" } }}
                >
                  <LinkedIn sx={{ fontSize: "2rem" }} />
                </IconButton>
                <IconButton
                  href="mailto:kunalsingh5431@gmail.com"
                  sx={{ color: "white", "&:hover": { color: "#fbbf24" } }}
                >
                  <Email sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Avatar Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                ml: isMdUp ? 6 : 0,
              }}
            >
              <Avatar
                src={profile}
                alt="Kunal Singh"
                sx={{
                  width: isMdUp ? 320 : 260,
                  height: isMdUp ? 320 : 260,
                  border: "6px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    border: "6px solid #fbbf24",
                    boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)",
                  },
                }}
              />

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
