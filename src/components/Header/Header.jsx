import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Avatar from "./Avatar";
const Items = ["Home", "About", "Skill", "Services", "Contact"];

const Header = () => {
  return (
    <>
      <Box
        position="sticky"
        top={0}
        zIndex={10}
        bg="rgba(32, 32, 35, 0.1)"
        backdropFilter="blur(2px)"
        style={{ height: "70px", display: "flex", alignItems: "center" }}
      >
        <Container maxW="4xl">
          <Flex justify="space-between" align="center">
            <Logo />
            <Flex gap={4} height="70px" alignItems="center">
              {Items.map((item) => (
                <NavItem prop={item} />
              ))}
            </Flex>
            <Flex>
              <Avatar />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
