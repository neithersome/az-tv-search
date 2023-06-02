import StarIcon from "@mui/icons-material/Star";
import { Typography, TypographyProps } from "@mui/material";

interface RatingProps extends TypographyProps {
  rating: { average: string | number | null };
}

const Rating = ({ rating: { average }, ...typographyProps }: RatingProps) => {
  return (
    <Typography
      {...typographyProps}
      variant="h6"
      display="flex"
      alignItems="center"
      gap={0.5}
      paddingRight={1}
    >
      {average || "N/A"}
      <StarIcon sx={{ color: "gold" }} />
    </Typography>
  );
};

export default Rating;
