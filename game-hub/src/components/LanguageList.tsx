import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const LanguageList = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Language
      </MenuButton>
      <MenuList>
        <MenuItem>English</MenuItem>
        <MenuItem>Spain</MenuItem>
        <MenuItem>German</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageList;
