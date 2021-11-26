import React, { useState } from 'react';
import './style.css'
const FORM_JSON = [
    {
      texts: {
        header: 'Name Section',
      },
      inputs: [
        {
          label: 'Full Name',
          type: 'text',
          name: 'name',
          validation: {
            required: true,
            minLength: 4,
          },
          error: 'Name is required',
        },
      ],
    },
    {
      texts: {
        header: 'Password Section',
      },
      inputs: [
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          validation: {
            required: true,
            minLength: 6,
            maxLength: 10,
          },
          error: 'Password is required',
        },
        {
          label: 'Pincode',
          type: 'number',
          name: 'pincode',
          validation: {
            required: true,
            minLength: 6,
            maxLength: 6,
          },
          error: 'Invalid Pincode',
        },
      ],
    },
    {
      texts: {
        header: 'Address Section',
      },
      inputs: [
        {
          label: 'Zipcode',
          type: 'number',
          name: 'zipcode',
          validation: {
            required: true,
            minLength: 6,
            maxLength: 7,
          },
          error: 'Invalid Zipcode',
        },
      ],
    },
    {
      texts: {
        header: 'Thankyou for filling out the form',
      },
      inputs:[
          {

          }
      ]

      
    },
];
const From = () => {
    
    const Sub=(e)=>{
        e.preventDefault();
        
       
    }
    return (
        <div>
            <form>
            {
                FORM_JSON.map(data=>{
        //         console.log(data.inputs)
                   return(
                       <div className="form">
                           <h4>{data.texts.header}</h4>
                        {
                            data.inputs.map(value=>
                                {
                                    console.log(value)
                                    return(
                                        <div>
                                            
                             <label>{value.label}</label><br/>
                          {
                               value.name &&     <input type={value.type} name={value.name} required={value.validation.required} id="data"/>
                             }
                           
                             
                           </div>

                                    )
                                })
                        }
                       </div>
                   )
                })
            }
            <button onClick={Sub}>submit</button>
            </form>
        </div>
    );
};

export default From;