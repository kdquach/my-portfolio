import { motion } from "framer-motion";
import "./Skill.css";

const skills = [
  {
    name: "HTML",
    color: "#e34c26",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    color: "#264de4",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    textColor: "#222",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    color: "#61dafb",
    textColor: "#222",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NodeJS",
    color: "#3c873a",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "ExpressJS",
    color: "#222",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NestJS",
    color: "#ea2845",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    name: "Java",
    color: "#f89820",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Bootstrap",
    color: "#563d7c",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Chakra UI",
    color: "#319795",
    img: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg",
  },
  {
    name: "Tailwind",
    color: "#38bdf8",
    textColor: "#222",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Ant Design",
    color: "#0170FE",
    textColor: "#fff",
    img: "https://api.iconify.design/ant-design/ant-design.svg", // ví dụ link SVG từ iconify
  },
];

const Skill = ({ isVisible = true }) => {
  return (
    <motion.div
      className="skill-container"
      initial={{ opacity: 1, y: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div className="skill-main-box">
        <div className="skill-title">My Skills</div>
        <div className="skill-list">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
