import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { useTypeUI } from "../../hooks/typeUI";

const Items = ["Home", "About", "Skills", "Services", "Contact"];

const Header = () => {
  const type = useTypeUI();
  console.log(type);
  return (
    <>
      <Box
        position="fixed" // Đổi sticky thành fixed
        top={0}
        left={0}
        width="100%"
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
                <NavItem key={item} prop={item} />
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
