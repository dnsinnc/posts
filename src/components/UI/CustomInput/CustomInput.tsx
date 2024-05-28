import React from "react";


import './customInput.css'


interface CustomInputProps{
   placeholder: string;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
   value: any;
}

function CustomInput({ onChange, placeholder, value }: CustomInputProps) {
   return ( 
      <input className="custom-input" value={value} onChange={onChange} placeholder={placeholder} type="text"></input>
    );
}

export default CustomInput;