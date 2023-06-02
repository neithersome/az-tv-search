import { Box, Typography, Avatar } from "@mui/material";

import { Person } from "../types";

const Cast = ({ list }: { list: Person[] }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={5}>
      <Typography variant="h5">Cast</Typography>
      <Box display="flex" justifyContent="space-evenly" gap={5} flexWrap="wrap">
        {list.map(({ person }) => (
          <Box
            key={person.id}
            display="flex"
            alignItems="center"
            gap={2}
            width="150px"
          >
            <Avatar
              src={person.image?.medium}
              alt={person.name}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="body1">{person.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Cast;
