import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Chip, IconButton, SxProps, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useLoaderData, useNavigate } from "react-router-dom";

import { ShowApiResponse } from "../shared/api/tvmaze/types";
import Rating from "../shared/components/Rating";
import Runtime from "../shared/components/Runtime";
import Cast from "../shared/compositions/Cast";

const ViewShow = () => {
  const {
    image,
    name,
    premiered,
    genres,
    rating,
    averageRuntime,
    summary,
    _embedded,
  } = useLoaderData() as ShowApiResponse;
  const navigateTo = useNavigate();

  const handleBack = () => {
    navigateTo(-1);
  };

  return (
    <Box sx={containerStyles}>
      <IconButton sx={{ alignSelf: "flex-start" }} onClick={handleBack}>
        <ArrowBackIcon />
      </IconButton>
      {image ? (
        <img src={image?.medium} alt={name} />
      ) : (
        <Typography>No image</Typography>
      )}
      <Typography variant="h3">
        {name} ({premiered?.slice(0, 4)})
      </Typography>
      <Box display="flex">
        {genres.length > 0 && <Chip label={genres[0]} />}
      </Box>
      <Box display="flex" justifyContent="center" gap={5}>
        <Rating rating={rating} />
        <Runtime runtime={averageRuntime} />
      </Box>
      {summary && (
        <Typography variant="body1">
          {summary.replace(/<[^>]*>?/gm, "")}
        </Typography>
      )}
      {_embedded?.cast.length > 0 && <Cast list={_embedded?.cast} />}
    </Box>
  );
};

export default ViewShow;

const containerStyles: SxProps = {
  width: "75%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  p: 10,
  backgroundColor: grey[100],
  borderRadius: 10,
};
