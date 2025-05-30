import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive and modern websites using ReactJS, NodeJS, and more.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design clean and user-friendly interfaces for web and mobile applications.",
  },
  {
    title: "API Integration",
    description:
      "Integrate third-party APIs and build robust backend services.",
  },
];

const Services = () => {
  return (
    <Container maxW="4xl" py={12} h={"100vh"} position="relative">
      <Box
        position="absolute"
        top="55%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
      >
        <Heading as="h2" fontSize="3xl" mb={8} textAlign="center">
          My Services
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} gap={6}>
          {services.map((service, idx) => (
            <MotionBox
              key={service.title}
              p={6}
              boxShadow="md"
              borderRadius="lg"
              bg="whiteAlpha.900"
              textAlign="center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.5,
                type: "spring",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 24px 8px #90cdf4",
              }}
            >
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {service.title}
              </Text>
              <Text color="gray.600">{service.description}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Services;
