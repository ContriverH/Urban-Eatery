// user this form to create a register 
// update register
import React from 'react'
import { useForm } from 'react-hook-form'
import "./productform.css"
import { useState } from 'react'
import axios from 'axios'

export default function RestaurantForm() {
    const {register , handleSubmit, watch , errors } = useForm(); 
    const [submitted, setsubmitted] = useState(false); 
    const onSubmit = async (register) => { 
        const url = "http://localhost:3001/api/v1/restaurant/createRestaurant"
        axios.post(url, register).then((res)=>{
           if(res.status ==200 || res.status == 201){
             setsubmitted(true)
           }
        }).catch ((err)=>{
           console.log(err)
        })


      };
    return (
        <div className="product-form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field__group">
              <label>Name</label>
              <input
               type="text"
               name="name"
               ref={register({required: true})}
               placeholder="Name"
              />
            </div>
        
            <div className="field__group">
              <label>Address</label>
              <input type="text"
                     name="address" 
                     ref={register({required: true})}
                     placeholder="Address"
              />
            </div>


            <div className="field__group">
              <label>Phone Numer</label>
              <input type="text"
                     name="phoneNumber" 
                     ref={register({required: true})}
                     placeholder="Phone Number"
              />
            </div>

       
            <div className="form-group">
              <button className="btn btn-danger btn-block" type="submit">
                Add Restaurant
              </button>
            </div>

            {submitted == true ? "Successfully Added" : <div/>}
          </form>
       </div>
    )
}



