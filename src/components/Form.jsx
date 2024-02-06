import { useEffect } from "react";
import {  useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { filterByName } from "../store/slices/allCountries.slice";
const Form = () => {
  const { register, watch } = useForm();
  const dispatch = useDispatch()
  const paises = useSelector((store)=>store.countries.allCountries)
  
  useEffect(()=>{
        console.log(paises.length);
  },[])
  
  const handleButton = ()=>{
    dispatch(filterByName())
  }

  const handle = ()=>{
    dispatch(filterByName(watch('country')))
    console.log('bien');
  }
  return (
    <>
    <button onClick={handleButton}>
        dede
    </button>
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="p-5 grid gap-5"
    >
      <div className="flex gap-2 bg-slate-300 p-3 items-center rounded-md shadow-lg">
        <FaSearch />
        <input
          type="text"
          className="grow bg-transparent  outline-none"
          {...register("country", {
            onChange:handle
          })}
          
        />
      </div>
      <select className="w-max p-3 bg-slate-300 rounded-xl shadow-md outline-none">
        <option value="">All countries</option>
        <option value="">Europa</option>
        <option value="">Africa</option>
        <option value="">Ocenia</option>
        <option value="">Asia</option>
        <option value="">America</option>
      </select>

      {JSON.stringify(watch())}
    </form>
    </>
  );
};

export default Form;
