/* eslint-disable no-constant-binary-expression */
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/17894266/pexels-photo-17894266.jpeg"
        />
        <CardContent>
          <Typography variant="h5">Sushi restaurant</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"Split"}</p>
            <p className="text-sm text-blue-500">Sep 03, 2027 12:00 AM</p>
            <p className="text-sm text-red-500">Sep 10, 2027 12:00 AM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
