import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Coursera from "../icons/Coursera";

export default function Footer() {
  return (
    <Flex
      as={"footer"}
      width={"100%"}
      justifyContent="space-between"
      style={{ padding: "1rem" }}
    >
      <Text fontSize={"xs"}>
        Developed by{" "}
        <Link
          href="https://github.com/WanderleeDev"
          target="_blank"
          color="colorPalette.600"
        >
          WanderleeDev
        </Link>
      </Text>

      <Link
        href="https://www.coursera.org/"
        target="_blank"
        color="colorPalette.600"
        aria-label="Coursera"
      >
        <Coursera width={130} />
      </Link>
    </Flex>
  );
}
