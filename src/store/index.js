import { configureStore } from "@reduxjs/toolkit";
import countries from "./slices/allCountries.slice";


export default configureStore({
    reducer:{
        countries:countries
    }
})