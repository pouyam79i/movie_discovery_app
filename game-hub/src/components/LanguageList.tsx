import {
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLanguage, { Lang } from "../hooks/useLanguage";

interface Props {
  selectedLang: Lang;
  onSelectLang: (newLang: Lang) => void;
}

const LanguageList = ({ selectedLang, onSelectLang }: Props) => {
  const { data, error, isLoading } = useLanguage();

  if (error) return null;

  if (isLoading) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLang.english_name}
      </MenuButton>
      <MenuList>
        {/* TODO: append this lang to the list as a default const */}
        <MenuItem
          key={"en"}
          onClick={() => {
            onSelectLang({
              english_name: "English",
              iso_639_1: "us",
              name: "English",
            });
          }}
        >
          <HStack justifyContent="space-between">
            <Text>English</Text>
            <Image
              src={
                "https://purecatamphetamine.github.io/country-flag-icons/3x2/" +
                "US" +
                ".svg"
              }
              boxSize={"20px"}
              borderRadius={12}
            />
          </HStack>
        </MenuItem>
        {data?.slice(15, 25).map((lang) => {
          return (
            <MenuItem key={lang.iso_639_1} onClick={() => onSelectLang(lang)}>
              <HStack justifyContent="space-between">
                <Text>{lang.english_name}</Text>
                <Image
                  src={
                    "https://purecatamphetamine.github.io/country-flag-icons/3x2/" +
                    lang.iso_639_1.toUpperCase() +
                    ".svg"
                  }
                  boxSize={"20px"}
                  borderRadius={12}
                />
              </HStack>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default LanguageList;
