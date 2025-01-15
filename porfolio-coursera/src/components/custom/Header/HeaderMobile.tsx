import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Flex, Icon } from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import styles from "./style.module.css";
import { useState } from "react";

interface Props {
  routes: string[];
}

export default function HeaderMobile({ routes }: Props) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Flex>
      <DrawerRoot
        size={"full"}
        placement="start"
        open={open}
        onOpenChange={toggleDrawer}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild aria-label="Open menu">
          <Button
            aria-label="Open menu"
            variant="outline"
            size="lg"
            margin={"1rem 0 0 auto"}
          >
            <Icon fontSize="3xl">
              <HiMenuAlt3 />
            </Icon>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>My porfolio</DrawerTitle>
          </DrawerHeader>
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            letterSpacing={"wider"}
            gap={24}
            textTransform={"capitalize"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"4xl"}
          >
            {routes.map((url) => (
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={toggleDrawer}
                key={url}
                to={`/${url}`}
              >
                {url}
              </NavLink>
            ))}
          </DrawerBody>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Flex>
  );
}
