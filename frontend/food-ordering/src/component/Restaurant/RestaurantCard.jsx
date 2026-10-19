/* eslint-disable no-constant-condition */
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../State/Authentication/Action";
import { isPresentInFavorites } from "../config/logic";
import { authReducer } from "../../State/Authentication/Reducer";

const RestaurantCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const handleAddToFavorite = () => {
    console.log("handle add to favorites");
    dispatch(addToFavorite({ restaurantId: item.id, jwt }));
  };
  console.log("favorites", auth.favorites, "card id", item.id);
  return (
    <Card className="w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative `}
      >
        <img
          src={item.images[1]}
          alt="Restaurant"
          className="w-full h-40 rounded-t-md object-cover"
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        <div>
          <IconButton onClick={handleAddToFavorite}>
            {isPresentInFavorites(auth.favorites, item) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
