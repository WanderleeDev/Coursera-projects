import { Text } from "@chakra-ui/react";
import style from "./styles.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type: "banner" | "normal";
}

export default function TextAnimate({ text, type, ...props }: Props) {
  return (
    <div
      id="introduction"
      className={style["animate-container"]}
      data-section="introduction"
      {...props}
    >
      <Text className={style["animate-text"]}>
        <span className={type === "banner" ? "text-font-lg" : "text-base"}>
          {text}
        </span>
      </Text>
    </div>
  );
}
