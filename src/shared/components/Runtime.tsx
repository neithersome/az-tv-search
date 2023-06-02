import { Typography, TypographyProps } from "@mui/material";

interface RuntimeProps extends TypographyProps {
  runtime: number;
}

const Runtime = ({ runtime, ...typographyProps }: RuntimeProps) => {
  return (
    <Typography {...typographyProps} variant="h6">
      {runtime || "-"} min
    </Typography>
  );
};

export default Runtime;
