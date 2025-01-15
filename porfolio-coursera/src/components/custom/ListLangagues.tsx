import { fetchLanguages } from "@/utils/fetchLanguagues";
import { Flex, Badge, Text } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
  languages_url: string;
}

export default function ListLanguages({ languages_url }: Props) {
  const { data, error } = useSuspenseQuery({
    queryKey: ["languages", languages_url],
    queryFn: () => fetchLanguages(languages_url),
  });

  if (!Array.isArray(data) || error) {
    return (
      <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="2">
        {error?.message}
      </Text>
    );
  }

  return (
    <Flex
      gap={2}
      fontWeight="medium"
      letterSpacing="tight"
      mt="2"
      flexWrap={"wrap"}
    >
      {data.map((topic) => (
        <Badge colorScheme="teal" key={topic}>
          {topic}
        </Badge>
      ))}
    </Flex>
  );
}
