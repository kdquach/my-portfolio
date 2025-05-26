import React from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/me.jpg";

// Tạo một motion component từ thẻ img
const MotionImage = motion.img;

const Avatar = () => {
  return (
    <MotionImage
      src={avatar}
      alt="avatar"
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        objectFit: "cover",
        cursor: "pointer",
      }}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    />
  );
};

export default Avatar;
