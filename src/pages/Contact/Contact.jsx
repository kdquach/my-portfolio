import {
  Box,
  Container,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

const Contact = () => {
  return (
    <Container maxW="md" py={12} h={"100vh"} position="relative">
      <Box
        position={"absolute"}
        top="55%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
      >
        <Box boxShadow="lg" p={8} borderRadius="lg" bg="rgba(0,0,0,0.4)">
          <Heading as="h2" fontSize="3xl" mb={6} textAlign="center">
            Contact Me
          </Heading>
          <VStack spacing={4} as="form">
            <FormControl isRequired w={"100%"}>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" width="100%" />
            </FormControl>
            <FormControl isRequired w={"100%"}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <FormControl isRequired w={"100%"}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rows={5} />
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Send Message
            </Button>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
