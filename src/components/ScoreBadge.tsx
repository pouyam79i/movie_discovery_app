import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const ScoreBadge = ({ score }: Props) => {
  let color = score >= 7.0 ? "green" : score >= 5.0 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} borderRadius={"4px"} paddingX={1}>
      {score.toFixed(1)}
    </Badge>
  );
};

export default ScoreBadge;
