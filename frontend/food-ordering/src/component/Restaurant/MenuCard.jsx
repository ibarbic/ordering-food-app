/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React from "react";
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

const MenuCard = () => {

    const handleCheckBoxChange=(value) =>{
        console.log(value)
    }

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
              src="https://cdn.pixabay.com/photo/2022/07/15/18/17/spicy-burger-7323694_1280.jpg"
              alt=""
            />

            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>€4.99</p>
              <p className="text-gray-400">nice food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {ingredients.map((item) => (
              <div>
                <p>{item.category}</p>

                <FormGroup>
                  {item.ingredients.map((item) => (
                    <FormControlLabel control={<Checkbox  onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
          
            <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart" :" Out of Stock" }</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
