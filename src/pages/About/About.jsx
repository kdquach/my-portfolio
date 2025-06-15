import { Box, Container, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./About.css";

const About = ({ isVisible = true }) => {
  return (
    <Container maxW="4xl" h="100vh" position="relative">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
      >
        <Flex>
          <motion.div
            className="about-container"
            initial={{ opacity: 1, y: 0 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            style={{ pointerEvents: isVisible ? "auto" : "none" }}
          >
            <div className="about-main-box">
              <div className="about-title">About Me</div>
              <div className="about-text">
                Hi! I'm <b>KD</b>, a full-stack developer passionate about
                building interactive digital experiences.
              </div>
              <div className="about-text">
                I specialize in <b>React</b>, <b>Express</b>, and <b>MongoDB</b>{" "}
                to create modern, full-stack applications with responsive
                designs.
              </div>
              <ul className="about-list">
                <li key="food">🍜 Food ordering website</li>
                <li key="perfume">🧴 Perfume Shop E-commerce Website</li>
                <li key="game">🎮 Game development enthusiast</li>
              </ul>
              <div className="about-text">
                Beyond coding, I'm passionate about:
              </div>
              <ul className="about-list">
                <li key="sports">⚽ Sports & physical activities</li>
                <li key="gaming">🎮 Gaming & interactive media</li>
                <li key="design">🎨 UX/UI design principles</li>
                <li key="foodie">🍱 Exploring culinary experiences</li>
              </ul>
              <div className="about-text">
                Let's collaborate and build something extraordinary together!
              </div>
            </div>
          </motion.div>
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
