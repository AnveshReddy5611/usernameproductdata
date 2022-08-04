import React from 'react';
// import Data from './users.json';
import './Products'

function Table2(props) {

  
return(
    
         <tr>
            <td>{props.Sno}</td>
            <td>{props.Title}</td>
            <td>{props.Price}</td>
            <td>{props.Description}</td>            
            <td>{props.Category}</td>
            <td>{props.Count}</td>
          
            

            </tr>
    
)}

export default Table2