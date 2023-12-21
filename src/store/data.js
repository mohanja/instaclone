import { configureStore } from "@reduxjs/toolkit";
import data from './slice';


export const store=configureStore({
    
        devTools:true,
        reducer:{
             List:data,
             Main:data,
             Explore:data,
             Reels:data
        }
    
});