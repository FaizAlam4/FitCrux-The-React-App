import './Exercise.css';
import React, {  useEffect,useState } from 'react'
import {exeroptions, fetchData } from './utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


function Exercise() {
    const [search,setSearch]=useState('');
    const [setExercises]=useState([])
    const [bodyParts,setBodyParts]=useState([])

    useEffect(()=>{
        const fetchExercisesData=async ()=>{
            const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exeroptions);
            setBodyParts(['all',...bodyPartsData])
        }
    },[]);


   const seeSearch= async()=>{
    if(search){
        const exerdata= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exeroptions);
        const searchedExercises=exerdata.filter(
            (exercise)=>exercise.name.toLowerCase().includes(search)||exercise.name.toLowerCase().includes(search)||exercise.name.toLowerCase().includes(search)||exercise.name.toLowerCase().includes(search)
            );
            console.log(searchedExercises);
            setSearch('');
            setExercises(searchedExercises);
    }
   }


  return (
    <div id='exer'>
        <br />

     <input type="text" value={search} placeholder='Search Exercises' onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}/>
     <br /> <br />
     <button className='btn btn-danger' onClick={seeSearch}>submit</button>
     <div>
      
     </div>
    </div>
  )
}

export default Exercise
