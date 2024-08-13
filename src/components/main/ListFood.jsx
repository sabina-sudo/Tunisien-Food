import React, { useEffect} from "react";
import Food from "./Food";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import {getfoods} from "../../store/features/foodSlice";
import { useDispatch, useSelector } from "react-redux";

const ListFood = () => {

  const listFood = useSelector((state)=> state.foods.listFoods)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getfoods())
    
  },[])  




  console.log(listFood);
  
  return (
    <>

      <Grid container spacing={2} mt={3}>
      {listFood.map((info)=> <Food info={info} />)}
        
        
      </Grid>
    </>
  );
};

export default ListFood;
