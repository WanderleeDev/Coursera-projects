import ContactForm from "@/components/custom/Form/ContactForm";
import Section from "@/components/custom/Section";
import ReactSvg from "@/components/icons/ReactSvg";
import { Box, Grid } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Section title="Contact me" level="3xl">
      <Grid
        gap={16}
        backgroundColor="#0016ff21"
        padding="4"
        md={{ padding: 8, gridTemplateColumns: "1fr 0.7fr" }}
        borderRadius="md"
        overflow="hidden"
      >
        <ContactForm />
        <Box
          display={{ base: "none", md: "block" }}
          alignContent={"center"}
          position={"relative"}
          animation={"spin 15s linear infinite"}
        >
          {[0, 1].map((item) => (
            <ReactSvg
              key={item}
              style={{
                display: "block",
                filter: item === 0 ? "blur(.7rem)" : "blur(0)",
                position: "absolute",
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
                zIndex: -1,
              }}
              width="300"
              height={"300"}
            />
          ))}
        </Box>
      </Grid>
    </Section>
  );
}
