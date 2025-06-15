import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import MyPic from "../../assets/me.jpg";
import "./Home.css";

const MotionBox = motion(Box);
const MotionImg = motion(Image);

const Home = () => {
  // Xác định loại màn hình
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container className="home-container">
      <Box className="home-abs-box">
        <Flex className="home-flex">
          <Box className="home-main-box">
            <Flex className="home-inner-flex">
              <MotionImg
                src={MyPic}
                className="home-motion-img"
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
                className="home-motion-box"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Text className="home-title">
                  Hi, I'm <span className="home-title-highlight">KD</span>
                </Text>
                <Text className="home-typewriter">
                  <Typewriter
                    words={
                      isMobile
                        ? ["Frontend Dev", "ReactJS", "UI/UX"]
                        : [
                            "Frontend Developer",
                            "ReactJS Enthusiast",
                            "UI/UX Lover",
                            "Người thích sáng tạo giao diện đẹp",
                          ]
                    }
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1200}
                  />
                </Text>

                <Text className="home-desc">
                  {isMobile
                    ? "I'm a Front-end Developer passionate about UI/UX."
                    : "I'm a Front-end Developer passionate about building beautiful interfaces and smooth user experiences using React, Tailwind CSS & Chakra UI. At the same time, I can also develop Back-end with NestJS, Express & MongoDB to create complete applications."}
                </Text>
                <HStack className="home-socials">
                  <Link
                    href="https://www.facebook.com/kd.quach03"
                    target="_blank"
                    isExternal
                    className="home-social-link"
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
                    className="home-social-link"
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
                    className="home-social-link"
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
