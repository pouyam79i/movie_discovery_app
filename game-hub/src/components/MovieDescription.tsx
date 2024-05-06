import { Box, HStack, Text } from "@chakra-ui/react";

interface Props {
  overview: string;
  vote_average: number;
}

const MovieDescription = ({ overview, vote_average }: Props) => {
  const getDesText = (overview: string) => {
    if (overview == null || overview.length == 0) {
      return "None";
    } else if (overview.length > 20) {
      return overview.slice(0, 20) + "...";
    }
    return overview;
  };

  return (
    <HStack justifyContent={"space-between"} padding={1}>
      <Text>{getDesText(overview)}</Text>
      <Box bgColor={"gray.500"} borderRadius={"4px"} paddingX={"4px"}>
        {vote_average.toFixed(1)}
      </Box>
    </HStack>
  );
};

export default MovieDescription;
