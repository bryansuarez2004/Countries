import { createSlice } from "@reduxjs/toolkit";

const countries = createSlice({
  name: "allCountries",
  initialState: {
    allCountries:[],
    contriesFilter:[]
  },
  reducers: {
    setearCountries:( State,action)=>{
        State.allCountries = action.payload
        State.contriesFilter = action.payload
       

    },
    filterByName:(state,action)=>{
      const pais =  state.allCountries.filter((element)=>{
      return element.name.common.toLowerCase().includes(action.payload.toLowerCase())
       })
       state.contriesFilter = pais
    }
  },
}); 


export const {setearCountries,filterByName}=countries.actions
export default countries.reducer;
