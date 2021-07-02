import { useEffect, useState } from "react";



const Item = ({ products,id }) => {
    
   
    const [newProducts, SetnewProducts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/app/getAllProductsInVehicle/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          SetnewProducts(data);
        });
    },[])
       
    
 

  return (
    <div className="Order">
      <div className="item-list">
        <h1 style={{ fontSize: "20px", float: "left", fontFamily: "Quicksand" }}>
                  Vehicle ID :{id}
        </h1>
    
       
        {newProducts && (<div>
        {newProducts.Products.map((Product) => (
            <div className="item" key={Product._id}>
            <div className="text-content">
                    <p>Name :{Product.Name }</p>
                    <p>Amount :Rs{Product.Amount}.00</p>
                    <p>Insock:{Product.Instock}</p>
                    <p>Code :{Product.Code } </p>
            </div>
           
          </div>
        ))}
       </div>
      
              )}
              </div>
    </div>
  );
}
    

export default Item;