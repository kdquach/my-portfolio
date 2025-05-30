import { Box, Container, Flex, Text, List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const About = () => {
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
          <MotionBox
            w="100%"
            p={8}
            bg="rgba(0,0,0,0.4)"
            borderRadius="16px"
            color="white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">
              About Me
            </Text>
            <Text fontSize="lg" mb={3} textAlign="center">
              Hi, I'm <b>KD</b> — a motivated developer with a passion for
              building effective and user-friendly web applications.
            </Text>
            <Text fontSize="md" mb={3} textAlign="center">
              I specialize in modern full-stack development using technologies
              like <b>React</b>, <b>JavaScript</b>, and <b>SQL</b>. I enjoy
              solving real-world problems through clean code and thoughtful
              design.
            </Text>
            <Text fontSize="md" mb={3} textAlign="center">
              Some of the projects I’ve built include:
            </Text>
            <List.Root
              spacing={2}
              mb={3}
              color="#90cdf4"
              fontSize="md"
              textAlign="center"
            >
              <List.Item>
                🍔 A fast food shop management website — handling products,
                categories, user accounts, and cart functionality.
              </List.Item>
              <List.Item>
                🍽️ A restaurant management system — supporting menu editing,
                reservations, and admin analytics.
              </List.Item>
            </List.Root>
            <Text fontSize="md" mb={3} textAlign="center">
              Each project helped me grow in both front-end and back-end
              development, from database modeling to UI/UX optimization.
            </Text>
            <Text fontSize="md" mb={3} textAlign="center">
              Beyond coding, I’m passionate about <b>UI/UX design</b>,{" "}
              <b>anime</b>, and sometimes enjoy writing{" "}
              <i>poetry for someone special</i> 💌.
            </Text>
            <Text fontSize="md" textAlign="center">
              I believe in building clean, scalable code and meaningful user
              experiences. Let’s create something great together.
            </Text>
          </MotionBox>
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
