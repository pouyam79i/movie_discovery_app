import useLanguages from "../hooks/useLanguages";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const Languages = () => {
  const { languages, isLoading, error } = useLanguages();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {languages.map((lang) => (
        <ListItem key={lang.iso_639_1} paddingY={"5px"}>
          <HStack>
            <Image
              src={
                "https://purecatamphetamine.github.io/country-flag-icons/3x2/" +
                lang.iso_639_1.toUpperCase() +
                ".svg"
              }
              boxSize={"35px"}
              borderRadius={12}
            />
            <Text fontSize={"lg"}>{lang.english_name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Languages;
