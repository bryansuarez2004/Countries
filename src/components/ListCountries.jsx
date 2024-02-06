import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setearCountries } from "../store/slices/allCountries.slice";

const ListCountries = () => {

  const allCountries = useSelector((store) => store.countries.contriesFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        dispatch(setearCountries(data));
        console.log('1');
      })
      .catch((err) => console.log(err));
  }, []);

  
  
 
  return <>
  <section className=" grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 p-8">
    { allCountries.map((element)=>{
          return <div key={element.name.common} className=" bg-white shadow-xl mx-auto w-full rounded-lg overflow-hidden">
                <div className=" h-[180px] shadow-lg">
                    <img src={element.flags.png} className="h-full w-full " alt="" />
                </div>
               <div className="p-3">
               <h2>nombre: {element.name.common}</h2>
                <p>personas: {element.population}</p>
                <p>continente: {element.region}</p>
                <p>capital: {element.capital ? element.capital.join(', ') : 'no tiene'}</p>
               </div>
          </div>
       })}
  </section>;
  </>
};

export default ListCountries;
