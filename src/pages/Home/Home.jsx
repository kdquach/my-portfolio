import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import MyPic from "../../assets/me.jpg";

const MotionBox = motion(Box);
const MotionImg = motion(Image);

const Home = () => {
  return (
    <Container maxW="4xl" h="100vh" position="relative">
      <Box
        position="absolute"
        top="55%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
      >
        <Flex>
          <Box
            bg="hsla(0, 0%, 75%, 0.05)"
            w="100%"
            p="4"
            color="white"
            position="relative"
            height={500}
            borderRadius="10px"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(10px)"
          >
            <Flex justifyContent="center" alignItems="center" h="100%">
              <MotionImg
                src={MyPic}
                w="40%"
                borderRadius="20px"
                position="absolute"
                transform="translateX(-100%)"
                boxShadow="0 4px 30px rgba(0, 0, 0, 0.2)"
                initial={{ opacity: 0, x: "-140%" }}
                animate={{
                  opacity: 1,
                  x: "-100%",
                  y: [0, -20],
                }}
                transition={{
                  duration: 1,
                  x: { duration: 1 },
                  opacity: { duration: 1 },
                  y: {
                    delay: 1,
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              />
              <MotionBox
                position="absolute"
                left="35%"
                transform="translateY(-50%)"
                w={["90%", "60%"]}
                p={6}
                bg="rgba(0,0,0,0.4)"
                borderRadius="16px"
                boxShadow="md"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Text fontSize="2xl" fontWeight="bold" mb={2}>
                  Hi, I'm <span style={{ color: "#90cdf4" }}>KD</span>
                </Text>
                <Text fontSize="xl" mb={2}>
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "ReactJS Enthusiast",
                      "UI/UX Lover",
                      "Người thích sáng tạo giao diện đẹp",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1200}
                  />
                </Text>

                <Text fontSize="lg" mt={4}>
                  I'm a Front-end Developer passionate about building beautiful
                  interfaces and smooth user experiences using React, Tailwind
                  CSS & Chakra UI. At the same time, I can also develop Back-end
                  with NestJS, Express & MongoDB to create complete
                  applications.
                </Text>
                <HStack
                  spacing={4}
                  mt={4}
                  display="flex"
                  justifyContent="center"
                  gap={4}
                >
                  <Link
                    href="https://www.facebook.com/kd.quach03"
                    target="_blank"
                    isExternal
                    outline={"none"}
                    _hover={{
                      transform: "translateY(-2px)",
                      transition: "all 0.3s",
                    }}
                  >
                    <FaFacebook
                      size="30"
                      color="#fff"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <Link
                    href="https://github.com/kdquach"
                    target="_blank"
                    isExternal
                    _hover={{
                      transform: "translateY(-2px)",
                      transition: "all 0.3s",
                    }}
                  >
                    <FaGithub
                      size="30"
                      color="#fff"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/stories/kd.quach03"
                    target="_blank"
                    isExternal
                    _hover={{
                      transform: "translateY(-2px)",
                      transition: "all 0.3s",
                    }}
                  >
                    <FaInstagram
                      size="30"
                      color="#fff"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                </HStack>
              </MotionBox>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Home;
