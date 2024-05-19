import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSorting: String;
  onSelectSorting: (newSorting: String) => void;
}

const SortSelector = ({ selectedSorting, onSelectSorting }: Props) => {
  const sortOrders = [
    { value: "popularity.desc", label: "Popularity" },
    { value: "title.asc", label: "Title" },
    { value: "vote_average.desc", label: "Vote" },
    { value: "primary_release_date.desc", label: "Release Date" },
    { value: "revenue.desc", label: "Revenue" },
  ];

  const currentSortOrdering = sortOrders.find(
    (order) => selectedSorting === order.value
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrdering?.label || "Popularity"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => {
          return (
            <MenuItem
              key={item.value}
              onClick={() => onSelectSorting(item.value)}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
