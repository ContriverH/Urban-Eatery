import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import ProductAdminTile from './productAdmintile';
// import { response } from 'express';
export default function  ProductAdminList() {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    };
    const baseurl = "http://localhost:3001/api/v1/food/getAllFoods"
    const [list, setlist] = useState([]); 
    useEffect(() => {
        console.log("started searching"); 
         const fetchdata = async()=>{
          await axios.get(baseurl, config).then((response)=> {
               const l = response.data.data 
               console.log(l)
               setlist(list => [...l, list]); 
           }).catch((errr)=>{
               console.log(errr)
           })    
        }
        fetchdata();
       
    }, []) 

    console.log(list); 

    return (
        <div>
            {
         list.map((re, index) =>{
          return  <ProductAdminTile  name={re.name} price={re.price} category={re.category} />  
        })
    }            
        </div>
    )
}



