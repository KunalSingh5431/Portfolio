"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Email, LocationOn, EmojiObjects } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_41j8ttm", // from EmailJS
        "template_x4rje42", // from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "6lv653sd3IKVsy5jR" // from EmailJS
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          fontWeight={800}
          gutterBottom
          sx={{ color: "#ffffff" }}
        >
          Get In Touch
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="#e0e0e0"
          sx={{ mb: 6 }}
          fontStyle={"italic"}
        >
          Let’s build something amazing together.
        </Typography>

        <Paper
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}
        >
          {/* Left Side Info */}
          <Box
            flex={1}
            sx={{
              background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
              color: "#1e1e2f",
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <EmojiObjects sx={{ fontSize: 50 }} />
            <Typography variant="h5" fontWeight={700}>
              Let’s work together!
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              I’m open to freelance work, collaborations, or just chatting tech.
              Feel free to reach out.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              {[{ icon: <Email />, text: "kunalsingh5431@gmail.com" },
                { icon: <LocationOn />, text: "Kolkata, WB" }].map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <IconButton sx={{ color: "#1e1e2f", p: 1.2, borderRadius: 2 }}>
                    {item.icon}
                  </IconButton>
                  <Typography>{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, backgroundColor: "#e0e0e0", width: "2px" }} />

          {/* Right Side Form */}
          <Box
            component="form"
            flex={1}
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                background: "linear-gradient(to right, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Send me a message
            </Typography>

            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  backgroundColor: "#f9fafb",
                },
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              type="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  backgroundColor: "#f9fafb",
                },
              }}
            />
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  backgroundColor: "#f9fafb",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                borderRadius: 3,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                background: "linear-gradient(45deg, #2563eb, #7c3aed)",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)",
                },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
