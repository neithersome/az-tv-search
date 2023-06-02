import { Box, SxProps, Typography } from "@mui/material";

import Rating from "../components/Rating";
import Runtime from "../components/Runtime";

export type PreviewProps = {
  id?: number;
  name: string;
  image: { medium: string; original: string };
  rating: { average: string | number | null };
  averageRuntime: number;
  onClick: () => void;
};

const Preview = ({
  name,
  image,
  rating,
  averageRuntime,
  onClick,
}: PreviewProps) => {
  return (
    <Box sx={previewStyles} onClick={onClick}>
      {image ? (
        <img
          src={image?.medium}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <Typography variant="body1">No image</Typography>
      )}
      <Box className="preview-content">
        <Box className="preview-content-header">
          {rating && <Rating rating={rating} color="white" />}
          {averageRuntime && <Runtime runtime={averageRuntime} color="white" />}
        </Box>
        <Typography variant="h6" color="white">
          <b>{name}</b>
        </Typography>
      </Box>
    </Box>
  );
};

const previewStyles: SxProps = {
  position: "relative",
  width: "200px",
  height: "350px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: 4,
  boxShadow: "5px 5px 20px 0 rgba(0,0,0,0.5)",
  transition: "0.5s ease-in-out",
  ":hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
    zIndex: -1,
  },
  ".preview-content": {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(0.5px)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    "& .MuiTypography-root": {
      p: 2,
      textAlign: "left",
    },
    "& .preview-content-header": {
      alignSelf: "flex-start",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid white",
    },
  },
};

export default Preview;
