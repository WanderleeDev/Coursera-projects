import { Badge } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color?: string;
}

export default function Tag({ color, children }: Props) {
  if (!color) return null;

  return (
    <Badge
      width={"max-content"}
      variant="outline"
      color={color}
      boxShadowColor={color}
    >
      {children}
    </Badge>
  );
}
