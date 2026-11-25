/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { categorizeIngredients } from "../util/CategorizeIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../State/Cart/CartAction";

const ingredients = [
  {
    category: "Nuts & Seeds",
    ingredients: [
      "Almonds",
      "Cashews",
      "Walnuts",
      "Pistachios",
      "Sunflower Seeds",
    ],
  },
  {
    category: "Proteins",
    ingredients: ["Chicken", "Beef", "Tofu", "Lentils", "Eggs"],
  },
];

const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckBoxChange = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient),
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients.map((ingredient) => ingredient.name),
      },
    };
    dispatch(addItemToCart(reqData));
    console.log("reqData ", reqData);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel1-content`}
        id={`panel1-header`}
      >
        <div className="lg:flex items-center justify-between ">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-28 h-28 object-cover"
              src={item.images[0]}
              alt=""
            />

            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {Object.keys(categorizeIngredients(item.ingredients)).map(
              (category) => (
                <div key={category}>
                  <p>{category}</p>

                  <FormGroup>
                    {categorizeIngredients(item.ingredients)[category].map(
                      (item) => (
                        <FormControlLabel
                          key={item.id}
                          control={
                            <Checkbox
                              onChange={() => handleCheckBoxChange(item)}
                            />
                          }
                          label={item.name}
                        />
                      ),
                    )}
                  </FormGroup>
                </div>
              ),
            )}
          </div>
          <div className="pt-5">
            <Button
              onClick={handleAddToCart}
              variant="contained"
              disabled={false}
              type="submit"
            >
              {true ? "Add to Cart" : " Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
