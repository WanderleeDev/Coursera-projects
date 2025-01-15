import Section from "@/components/custom/Section";
import CardProject from "@/components/custom/CardProject";
import { Grid } from "@chakra-ui/react";
import { usePinnedRepositories } from "@/hooks/usePinnedRepositories";
import { Text } from "@chakra-ui/react";

export default function Projects() {
  const {
    repositories: { pinned },
    isPending,
    error,
  } = usePinnedRepositories("WanderleeDev");

  if (isPending) {
    return (
      <Section title="Projects" level="3xl">
        <Text color="white">Loading...</Text>
      </Section>
    );
  }

  if (error && !isPending) {
    return (
      <Section title="Projects" level="3xl">
        <Text>{error} Try again later.</Text>
      </Section>
    );
  }

  return (
    <Section title="Projects" level="3xl">
      <Grid
        gap="4"
        md={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        lg={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        justifyTracks={"center"}
      >
        {pinned.map((repo) => (
          <CardProject key={repo.id} {...repo} />
        ))}
      </Grid>
    </Section>
  );
}
