import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { motion } from "framer-motion";

// Tạo MotionBox kế thừa Box của Chakra
const MotionBox = motion(Box);

const ItemStyle = {
  fontWeight: "500",
  fontSize: "15px",
  letterSpacing: "0.5px",
};

const NavItem = ({ prop }) => {
  return (
    <MotionBox
      as="a"
      href="#"
      px={3}
      py={2}
      style={ItemStyle}
      alignItems="center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      _hover={{
        textDecoration: "none",
        borderBottom: "3px solid",
        borderColor: useColorModeValue("white"),
      }}
    >
      {prop}
    </MotionBox>
  );
};

export default NavItem;
