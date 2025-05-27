import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../ui/color-mode";

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
      as={Link}
      to={prop === "Home" ? "/" : `/${prop.toLowerCase()}`}
      px={3}
      py={2}
      style={ItemStyle}
      _hover={{
        textDecoration: "none",
        borderBottom: "3px solid",
        borderColor: useColorModeValue("white"),
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {prop}
    </MotionBox>
  );
};

export default NavItem;
