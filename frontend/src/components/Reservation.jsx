import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();


  const handleReservation = async (e) =>{
      e.prevenDefault();
      try {
         const  {data} = await axios.post("http://localhost:4000//api/v1/reservation/send", {firstName, lastName, email, phone, data, time});
      } catch (error) {
        
      }
  }

  return (
    <section className="reservation" id="reservation">
      Reservation
    </section>
  );
};

export default Reservation;
