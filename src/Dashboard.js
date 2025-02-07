import React,{useEffect, useState } from 'react'
import './Dashboard.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wallpaper from './Images/wallpaper.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Dashboard() {


  const[show,setShow] = useState(true)

  useEffect(() =>{
    let a = localStorage.getItem("UserName")    
    toast.success("Welcome to the Dashboard  " + a)
   },[])

   const handlebar = () =>{
    setShow(!show)
   }

        
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <ToastContainer/>
      <IoIosArrowDroprightCircle className='icon' onClick={handlebar} />

      {show ? 
       <div className='side-wrap'>
       <label>Name</label>
       <label>Price</label>
       <label>quantity</label>
       <label>Address</label>
       <label>Total</label>
     </div>
     : null
      }
   


    </div>
  )
}

export default Dashboard
