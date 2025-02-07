import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Settings() {

  const[inputValue1 , setInputValue1] = useState("")
  const[inputValue2 , setInputValue2] = useState('')

  const handleSubmit = () =>{
    console.log(inputValue1);
    if(inputValue1 === '' ){
      toast.error("Please enter the username")
    }else{
      localStorage.setItem("UserName" , inputValue1)
      toast.success("Username Saved Successfully")
    }


    if(inputValue2 === ''){
      toast.error("Please enter the Password")
    }else{
      localStorage.setItem("Password" , inputValue2)
      toast.success("Password Saved Successfully")
    }


  }
 

  return (
    <div>
       <ToastContainer />
      <label>UserName</label>
      <input
       type="text" 
       value={inputValue1}
       onChange={(e) => setInputValue1(e.target.value)}
       /><br/>

      <label>Password</label>
      <input
       type="password" 
       value={inputValue2}
       onChange={(e) => setInputValue2(e.target.value)}
       />

<button onClick={handleSubmit}>Submit</button>

    </div>


  )
}

export default Settings
