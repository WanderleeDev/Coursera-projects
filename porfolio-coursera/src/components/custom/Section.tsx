import { Flex, Heading } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  level: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  children: React.ReactNode;
}

export default function Section({ title, level, children }: SectionProps) {
  return (
    <Flex as={"section"} gap="4" w="100%" direction={"column"}>
      <Heading size={level} colorPalette={"cyan"}>
        {title}
      </Heading>
      {children}
    </Flex>
  );
}
