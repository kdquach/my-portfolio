import { Box } from "@chakra-ui/react";
import NavItems from "./NavItems";
import { HiHome } from "react-icons/hi";
import { MdOutlineInfo } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { useState } from "react";
import "./NavItemsStyle.css";

const Items = [
  { name: "Home", icon: <HiHome />, to: "/" },
  { name: "About", icon: <MdOutlineInfo />, to: "/about" },
  { name: "Skills", icon: <SiHyperskill />, to: "/skills" },
  { name: "Services", icon: <GrServices />, to: "/services" },
  { name: "Contact", icon: <RiContactsFill />, to: "/contact" },
];

const BottomNavigationBar = () => {
  const [active, setActive] = useState(0); // Mặc định là Home

  const itemCount = Items.length;
  const navWidth = 100 / itemCount; // %
  const indicatorSize = 60; // px

  return (
    <Box
      position="fixed"
      bottom="0"
      w="100%"
      zIndex={20}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      fontSize={14}
      bg="white"
      borderRadius="10px"
      height="70px"
      boxShadow="0px 0px 10px rgba(0,0,0,0.2)"
      overflow="visible"
      style={{ position: "fixed" }}
    >
      {/* Indicator tròn */}
      <div
        className="circle-indicator"
        style={{
          position: "absolute",
          top: -indicatorSize / 2,
          left: `calc(${active * navWidth}% + ${navWidth / 2}% - ${indicatorSize / 2}px)`,
          width: `${indicatorSize}px`,
          height: `${indicatorSize}px`,
          background: "#54ACBF",
          borderRadius: "50%",
          transition: "left 0.5s cubic-bezier(.4,2,.6,1), background 0.2s",
          zIndex: 2,
          border: "6px solid hsl(226, 59%, 15%)",
          pointerEvents: "none",
        }}
      ></div>
      {Items.map((item, idx) => (
        <NavItems
          key={item.name}
          {...item}
          isActive={active === idx}
          onClick={() => setActive(idx)}
        />
      ))}
    </Box>
  );
};

export default BottomNavigationBar;
