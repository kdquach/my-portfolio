import React from "react";
import logo from "../../assets/kd-logo-white.png";
import { motion } from "framer-motion";

const logoStyle = {
  width: 50,
  height: 50,
  borderRadius: "50%",
  objectFit: "cover",
};

const MotionLogo = motion.img;

const Logo = () => {
  return (
    <MotionLogo
      src={logo}
      alt="logo"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
      style={logoStyle}
    />
  );
};

export default Logo;
