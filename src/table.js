import React from 'react';
// import Data from './users.json';
import './username'

function Table(props) {
//     var rog;
//   rog=<div>
//     <table>
//     <tr>
//         <th>S.No</th>
//         <th>username</th>
//         <th>email</th>
//         <th>phone</th>
//         <th>Name(firstname,secondname)</th>
//         <th>Adress</th>
//         </tr>
    
//         {Data.map((UserName , index)=>{
            
//           return(
//           <tr key={index}>
//             <td>{UserName.id}</td>
//             <td>{UserName.username}</td>
//             <td>{UserName.email}</td>
//             <td>{UserName.phone}</td>
//             <td>{UserName.name.firstname}{UserName.name.lastname}</td>
//             <td>{UserName.address.geolocation.lat}{UserName.address.geolocation.long}</td>
//             </tr>
//             )})}
//             </table></div>
  
return(
    
            
         <tr>
            <td>{props.Sno}</td>
            <td>{props.Username}</td>
            <td>{props.Email}</td>
            <td>{props.Phone}</td>
            <td>{props.FirstName}{props.LarstName}</td>
          
            

            </tr>
        
    // </div>
)}

export default Table