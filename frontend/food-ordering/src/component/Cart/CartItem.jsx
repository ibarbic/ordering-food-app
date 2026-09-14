import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-20 h-20 object-cover"
            src="https://images.pexels.com/photos/19786235/pexels-photo-19786235.jpeg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
            <div className="space-y-1 lg:space-y-3 w-full">
            <p>Pizza</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                        <IconButton>
                            <RemoveCircleOutlineOutlinedIcon/>
                        </IconButton>
                        <div className="w-5 h-5 text-xs flex items-center justify-center">
                            {5}

                        </div>
                        <IconButton>
                            <AddCircleOutlineOutlinedIcon/>
                        </IconButton>

                    </div>

                </div>
            </div>
            <p>€10.99</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1,1,1,].map((item) => <Chip label={"bread"} />)}

      </div>
    </div>
  );
};

export default CartItem;
