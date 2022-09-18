import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";

const MediaCard = ({ post }) => {
  const [Status, setStatus] = React.useState("");
  // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$", post.progress);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={post.selectedFile}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ marginBottom: 22 }}
        >
          Name: {post.creatorName}
        </Typography>
        <Typography style={{ textAlign: "left" }}>Self Rating</Typography>
        <Slider
          size="small"
          defaultValue={post.progress}
          aria-label="Small"
          valueLabelDisplay="on"
          disabled
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={Status}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            defaultValue="completed"
            disabled
          >
            <MenuItem value="10">
              <em>None</em>
            </MenuItem>
            <MenuItem value="20">Newly Created</MenuItem>
            <MenuItem value="30">On Going</MenuItem>
            <MenuItem value="40">Completed</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "#ff1744" }}>
          <DeleteForeverIcon />
        </Button>
        <Button size="small">
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
