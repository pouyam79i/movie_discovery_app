import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";

interface Props {
  onSearchSubmit: (searchText: string | null) => void;
}

const NavBar = ({ onSearchSubmit }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
