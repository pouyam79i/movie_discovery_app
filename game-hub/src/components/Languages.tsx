import useLanguages from "../hooks/useLanguages";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectLang: (lang: string) => void;
}

const Languages = ({ onSelectLang }: Props) => {
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
            <Button
              fontSize={"lg"}
              variant={"link"}
              onClick={() => onSelectLang(lang.iso_639_1)}
            >
              {lang.english_name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Languages;
