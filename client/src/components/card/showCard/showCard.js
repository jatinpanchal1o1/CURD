import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DataCard from "../card";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

export default function RowAndColumnSpacing() {
  const posts = useSelector((state) => state.posts);
  console.log("post data : ", posts);
  return (
    <Box sx={{ width: "100%" }}>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ justifyContent: "center" }}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <DataCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
