import { useWindowSize } from "@/hooks/useWindowSize";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { Heading } from "@chakra-ui/react";

export default function Header() {
  const sections = ["home", "projects", "contact"];
  const { isMatching } = useWindowSize(768);

  return (
    <header>
      {isMatching ? (
        <HeaderDesktop routes={sections} />
      ) : (
        <HeaderMobile routes={sections} />
      )}
      <Heading as="h1" className="sr-only">
        WanderLeeDev Portfolio
      </Heading>
    </header>
  );
}
