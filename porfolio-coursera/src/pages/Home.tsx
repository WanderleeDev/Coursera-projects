import InfiniteMarquee from "@/components/custom/InfiniteMarquee";
import TextAnimate from "@/components/custom/TextAnimate";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Icons from "@/components/icons";

const technologies: React.ReactNode[] = Object.entries(Icons)
  .filter(([key]) => key.toLowerCase() !== "coursera")
  .map(([key, Component]) => <Component width={50} height={50} key={key} />);

export default function Home() {
  const Presentation = `
  Frontend developer with experience in React and Angular, developing interactive responsive interfaces focused on SEO. In constant training to improve my skills and learn new technologies.
  `;

  return (
    <Flex gap={"16"} direction={"column"} as={"section"}>
      <Flex
        direction={"column"}
        gap={"6"}
        alignItems={"center"}
        paddingBlock={"16"}
      >
        <Image
          src="https://res.cloudinary.com/dy8gpozi6/image/upload/v1736531509/avatar_cpdcak.webp"
          width={"180px"}
          height={"180px"}
          md={{ width: "250px", height: "250px" }}
          aspectRatio={1}
          alt="avatar"
          borderRadius="full"
        />
        <Heading
          as={"h2"}
          size={"2xl"}
          fontWeight={"800"}
          style={{
            textAlign: "center",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          <Text className="text-bg-clip" as={"span"}>
            WanderleeDev
          </Text>
          <Text
            className="text-bg-clip"
            fontSize="lg"
            color={"#50aed7"}
            md={{ fontSize: "lg" }}
            as={"span"}
          >
            Frontend Developer
          </Text>
        </Heading>
      </Flex>
      <InfiniteMarquee
        nodes={technologies}
        spacing={40}
        speed="slow"
        slides={4}
      />
      <TextAnimate text={Presentation} type={"normal"} />
    </Flex>
  );
}
