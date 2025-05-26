import React from "react";
import logo from "../../assets/logo.png";
import * as motion from "motion/react-client";

const logoStyle = {
  width: 50,
  height: 50,
  borderRadius: "50%",
  objectFit: "cover",
};

const Logo = () => {
  return (
    <motion.img
      src={logo}
      alt="logo"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
      style={logoStyle}
    />
  );
};

export default Logo;
