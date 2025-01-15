import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router";
import styles from "./style.module.css";

const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/WanderleeDev",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/wanderlee-max/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Mail",
    url: "mailto:wanderleedev@gmail.com",
    icon: <IoIosMail />,
  },
];

interface Props {
  routes: string[];
}

export default function HeaderDesktop({ routes }: Props) {
  return (
    <Box height={"60px"}>
      <Flex justifyContent="space-between" className={styles.reveal}>
        <Flex gap={4} textTransform="capitalize">
          {routes.map((url) => (
            <NavLink
              key={url}
              to={`/${url}`}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {url}
            </NavLink>
          ))}
        </Flex>
        <Flex gap={4}>
          {socialMedia.map(({ name, url, icon }) => (
            <NavLink aria-label={name} key={name} to={url} target="_blank">
              <Icon fontSize="25px" _hover={{ color: "#DFB512" }}>
                {icon}
              </Icon>
            </NavLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
