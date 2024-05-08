import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const CountList = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Movie Count
      </MenuButton>
      <MenuList>
        <MenuItem>20 Movie</MenuItem>
        <MenuItem>30 Movie</MenuItem>
        <MenuItem>50 Movie</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CountList;
