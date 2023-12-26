import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Cart from "../components/Cart";

function Register() {
  const [data, setData] = useState({
    valid: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: null,
    gender: "",
    bloodGroup: "",
    size: "",
    category1: false,
    category2: false,
    address: "",
    city: "",
    state: "",
    pin: "",
    ePhone: "",
    eName: "",
    eRelation: "",
    transactionId: "",
  });

  const handleValid = (Data) => {
    setData(Data);
    // console.log(Data);
  };

  return (
    <div>
      <Navbar />
      {data.valid ? (
        <Cart Cat1={data.category1} Cat2={data.category2} />
      ) : (
        <Form onSubmitForm={handleValid} />
      )}
    </div>
  );
}

export default Register;
