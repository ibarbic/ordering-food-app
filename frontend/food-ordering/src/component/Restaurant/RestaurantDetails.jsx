import { Divider, FormControl, Grid, RadioGroup, Typography,Radio, FormControlLabel } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from 'react';
import MenuCard from './MenuCard';
const foodCategories = [
    "pizza",
    "burger",
    "pasta",
    "salad",
    "dessert",
  
]

const foodTypes = [
    {label: "All", value: "all"},
    {label: "Veg", value: "veg"},
    {label: "Non-Veg", value: "non-veg"},
    {label:"Seasonal", value: "seasonal"},
]

const menuItems = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]


const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const [foodCategory, setFoodCat] = useState(foodCategories[0]);
    const handleFilter = (e) => {
        const { name, value } = e.target;
        if (name === "foodType") {
            setFoodType(value);
        } else if (name === "foodCategory") {
            setFoodCat(value);
        }
        
        console.log(e.target.value, e.target.name);
    }
  return (
    <div className = "px-5 lg:px-20 ">

        <section>
            <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food/3</h3>
            <div>
                <Grid container spacing={2} >
                    
                    <Grid item size={{ xs: 12, sm: 12 }}>
                        <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg" alt=""  />
                    </Grid>
                    
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <img className="w-full h-[40vh] object-cover" src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
                    </Grid>
                    
                    <Grid item size={{ xs: 12, sm: 6 }}>
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg" alt=""  />
                    </Grid>
                    
                </Grid>

            </div>

            <div className='pt-3 pb-5'>

                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                 <p className='text-gray-500 mt-1'>
                    <span>Experience the best of Indian cuisine with our fast and delicious meals.</span>
                    </p>
                <div className="space-y-3 mt-3">
                     
                    <p className='text-gray-500 flex items-center gap-3'>
                   <LocationOnIcon/> 
                   <span>
                    123 Main Street, City, Country
                    </span>
                </p>
                 <p className='text-gray-500 flex items-center gap-3'>
                   <CalendarTodayIcon/><span>Mon-Sun: 9:00 AM - 10:00 PM</span> 
                </p>
                </div>
                
               
            

            </div>
        </section>
        <Divider/>

        <section className = "pt-8 lg:flex relative">

            <div className = "space-y-10 lg:w-[20%] filter">
                <div className = "box space-y-5 lg:sticky top-28 p-5">
                    <div>
                        <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className = "py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup name="foodType" value ={foodType} onChange={handleFilter}>
                                {foodTypes.map((item) => (
                                    <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div className="mt-5">
                        <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className = "py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup name="foodCategory" value ={foodCategory} onChange={handleFilter}>
                                {foodCategories.map((item) => (
                                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                
                </div>

            </div>

            <div className = "space-y-5 lg:w-[80%] lg:pl-10">{menuItems.map((item) => (
                <MenuCard />
            ))}</div>

        </section>


    </div>
  )
}

export default RestaurantDetails