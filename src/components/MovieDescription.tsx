import { Box, HStack, Text } from "@chakra-ui/react";
import ScoreBadge from "./ScoreBadge";

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
      <Text color={"gray.500"}>{getDesText(overview)}</Text>
      <ScoreBadge score={vote_average} />
    </HStack>
  );
};

export default MovieDescription;
