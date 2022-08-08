import React from 'react';
import UserData from './users.json';
import Table from './table';
import { useState } from "react";

function Username () {
    const[tabledata,setTableData]=useState(UserData)
    const handlename = () => {
        const numPrice = [...tabledata].sort((a, b) =>a.name.firstname.localeCompare(b.name.firstname));
        setTableData(numPrice);
      };
    
      const handleemail = () => {
        console.log(tabledata,"before sort")
        const numRating = [...tabledata].sort((c, d) =>  c.email.localeCompare(d.email));
        setTableData(numRating);
        console.log(tabledata,"after sort")
      };
  return (
    <div>
         <button onClick={handlename}>FirstName based sort</button>
      <button onClick={handleemail}>Email based sort</button>
        {UserData.map((UserName ,index)=>(
      <div key={index}><li>{UserName.username}</li></div>
   ))}
   
    
    <table><tr><th>Sno</th><th>UserName</th><th>Email</th><th>Phone</th>
    <th>FirstName</th></tr>
    {tabledata.map((Data, index) =>(<Table Sno={Data.id} Username={Data.username} 
    Email={Data.email} Phone={Data.phone} FirstName={Data.name.firstname}
    LastName={Data.name.lastname} />))}</table></div>)
}

export default Username