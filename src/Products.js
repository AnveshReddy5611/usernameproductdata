import React from "react";
import ProductData from "./products.json";
import Table2 from "./table2";
import { useState } from "react";

function Products() {
    const[data,setData]=useState(ProductData)
    const[searchdata,setSearchdata]=useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const handletitle = () => {
    const numPrice = [...data].sort((a, b) =>a.title.localeCompare(b.title));
    setData(numPrice);
  };

  const handlecategory = () => {
    //console.log(data,"before sort")
    const numRating = [...data].sort((c, d) =>  c.category.localeCompare(d.category));
    setData(numRating);
    //console.log(data,"after sort")
  };
  const handleSubmit=()=>{
    console.log(searchdata, "i am data after submit" )
  }
 
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handlecategory}>Category based sort</button>
      <button onClick={handletitle}>Title based sort</button>
      
      <table>
        <tbody>
        <tr>
          <th>Sno</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Count</th>
        </tr>
        {data.filter((val, key) => {
          if (searchTerm === "") {
            return val.title;
          } 
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val.title;
          }
         

        
          else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val.category;
          } 

        }).map((Data,index) => (
          <Table2
            Sno={Data.id}
            Title={Data.title}
            Price={Data.price}
            Description={Data.description}
            Category={Data.category}
            Count={Data.rating.count}
          />
        ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Products;
