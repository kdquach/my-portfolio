import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./Services.css";

const MotionBox = motion(Box);

const services = [
  {
    name: "Web Development",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Build modern, responsive websites and web apps using ReactJS, HTML, CSS, and JavaScript.",
  },
  {
    name: "API Design",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    desc: "Design and implement RESTful APIs with Node.js, ExpressJS, and secure best practices.",
  },
  {
    name: "UI/UX Design",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    desc: "Create intuitive, user-friendly interfaces and wireframes for web and mobile platforms.",
  },
  {
    name: "Mobile App",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Develop cross-platform mobile apps with modern JavaScript frameworks and libraries.",
  },
  {
    name: "Database Integration",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "Integrate and manage SQL/NoSQL databases for scalable, reliable data storage.",
  },
  {
    name: "Consulting & Training",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    desc: "Provide coding consultation, code review, and training for teams or individuals.",
  },
];

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-main-box">
        <div className="service-title">My Services</div>
        <div className="service-list">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <img
                src={service.img}
                alt={service.name}
                className="service-img"
              />
              <div>
                <div className="service-name">{service.name}</div>
                <div
                  className="service-desc"
                  style={{
                    fontSize: "0.98rem",
                    color: "#b9e3fa",
                    marginTop: "0.2rem",
                  }}
                >
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
