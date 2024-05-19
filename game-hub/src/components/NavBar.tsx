import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
