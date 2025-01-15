import { Repository } from "@/models/Repository.model";
import { Card, Box, Stack } from "@chakra-ui/react";
import Tag from "./Tag";
import ListLanguages from "./ListLangagues";
import { Link } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Suspense } from "react";
import { randomGradientGenerator } from "@/utils/RandomGradientGenerator";

export default function CardProject({
  description,
  homepage,
  languages_url,
  name,
  html_url,
  topics,
  id,
  owner: { avatar_url, login },
}: Repository) {
  const tags: Record<string, string> = {
    finished: "#b1f7b1",
    indevelopment: "#dfb512",
    prerelease: "#96efef",
    "future-updates": "#c3c3fb",
  };

  return (
    <Card.Root
      overflow="hidden"
      display={"flex"}
      flexDir={"column"}
      sm={{ flexDir: "row" }}
      md={{ flexDir: "column" }}
    >
      <Box
        style={randomGradientGenerator({
          type: id % 2 === 0 ? "complex" : "simple",
        })}
        paddingInline={"2"}
        sm={{ width: "180px" }}
        md={{ width: "100%" }}
        height="220px"
        position="relative"
      >
        <Card.Title
          height="100%"
          width={"min(100%, 380px)"}
          display={"grid"}
          placeItems={"center"}
          textTransform={"Uppercase"}
          WebkitTextStroke={"1px #000"}
          textAlign="center"
          color="transparent"
          lineHeight="1.1"
          fontSize="clamp(1.4rem, 1.8rem, 3vw)"
          textShadow={"0 0 10px rgba(0, 0, 0, 0.2)"}
          fontWeight="bold"
        >
          {name?.replace("-", " ")}
        </Card.Title>
        <Avatar
          position="absolute"
          bottom="0"
          right="0"
          margin="4"
          title={login}
          name={login}
          src={avatar_url}
        />
      </Box>
      <Card.Body gap="2">
        <Stack direction="row" flexWrap="wrap">
          {topics?.map((topic) => (
            <Tag key={topic} color={tags[topic]}>
              {topic.replace("-", " ")}
            </Tag>
          ))}
        </Stack>
        <Card.Description title={description!}>
          {description?.slice(0, 150)} ...
        </Card.Description>
        <Suspense fallback={<div>Loading languages...</div>}>
          <ListLanguages languages_url={languages_url} />
        </Suspense>
      </Card.Body>
      <Card.Footer gap="4" sm={{ display: "none" }} md={{ display: "flex" }}>
        {[homepage, html_url].map(
          (url, i) =>
            url && (
              <Link key={url} variant={"underline"} href={url} target="_blank">
                {i === 0 ? "Demo" : "Github"}
              </Link>
            )
        )}
      </Card.Footer>
    </Card.Root>
  );
}
