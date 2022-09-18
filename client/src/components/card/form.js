import React, { useState } from "react";
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
import Typography from "@mui/material/Typography";
import { TextField, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";

export default function MediaCard() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creatorName: "",
    progress: "",
    status: "",
    selectedFile: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <Paper>
      <form noValidate onSubmit={handelSubmit}>
        <Card sx={{ minWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              <div style={{ paddingBottom: 4 }}>
                <CloudUploadIcon style={{ marginRight: 4 }} />
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                />
              </div>
              <TextField
                name="creatorName"
                variant="outlined"
                label="Name"
                fullWidth
                value={postData.creatorName}
                onChange={(e) =>
                  setPostData({ ...postData, creatorName: e.target.value })
                }
              />
            </Typography>
            <Slider
              size="small"
              defaultValue={70}
              name="progress"
              value={postData.progress}
              onChange={(e) =>
                setPostData({ ...postData, progress: e.target.value })
              }
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Status</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                name="status"
                value={postData.status}
                onChange={(e) =>
                  setPostData({ ...postData, status: e.target.value })
                }
                label="Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Newly Created</MenuItem>
                <MenuItem value={20}>On Going</MenuItem>
                <MenuItem value={30}>Completed</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button type="submit" size="large" fullWidth onClick={handelSubmit}>
              Submit
            </Button>
            <Button size="large" color="secondary" fullWidth onClick={clear}>
              Clear
            </Button>
          </CardActions>
        </Card>
      </form>
    </Paper>
  );
}
