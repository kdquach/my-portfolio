import { Box, Container, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const skills = [
  {
    name: "HTML",
    color: "#e34c26",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    color: "#264de4",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    textColor: "#222",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    color: "#61dafb",
    textColor: "#222",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NodeJS",
    color: "#3c873a",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "ExpressJS",
    color: "#222",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NestJS",
    color: "#ea2845",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    name: "Java",
    color: "#f89820",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Bootstrap",
    color: "#563d7c",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Chakra UI",
    color: "#319795",
    img: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg",
  },
  {
    name: "Tailwind",
    color: "#38bdf8",
    textColor: "#222",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Ant Design",
    color: "#0170FE",
    textColor: "#fff",
    img: "https://api.iconify.design/ant-design/ant-design.svg", // ví dụ link SVG từ iconify
  },
];

const Skill = () => {
  // Hàm chuyển hex sang rgba
  const hexToRgba = (hex, alpha = 0.85) => {
    let c = hex.replace("#", "");
    if (c.length === 3)
      c = c
        .split("")
        .map((x) => x + x)
        .join("");
    const num = parseInt(c, 16);
    return `rgba(${(num >> 16) & 255},${(num >> 8) & 255},${num & 255},${alpha})`;
  };

  return (
    <>
      <Container
        maxW="4xl"
        h="100vh"
        display={"flex"}
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center">
            My Skills
          </Text>
          <SimpleGrid columns={[2, 3, 4]} spacing={6} gap={6}>
            {skills.map((skill, idx) => (
              <MotionBox
                key={skill.name}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 24px 8px #90cdf4",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                bg={hexToRgba(skill.color, 0.5)}
                color={skill.textColor || "white"}
                borderRadius="lg"
                p={4}
                textAlign="center"
                fontWeight="bold"
                fontSize="xl"
                boxShadow="md"
                cursor="pointer"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minH="100px"
              >
                {/* Hiển thị icon nếu có, nếu không thì hiển thị ảnh */}
                {skill.icon ? (
                  <Box mb={3}>{skill.icon}</Box>
                ) : (
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    boxSize="40px"
                    mb={3}
                    bg="whiteAlpha.800"
                    borderRadius="full"
                    p={2}
                  />
                )}
                {skill.name}
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default Skill;
