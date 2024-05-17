import useGenre, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data?.genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            {/* TODO: add a src for img */}
            <Image src={""} boxSize={"35px"} borderRadius={12} />
            <Button
              fontSize={"lg"}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
