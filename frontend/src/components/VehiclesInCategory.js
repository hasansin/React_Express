import { useEffect, useState } from "react";



const Item = ({ id }) => {
    
   
    const [newVehicles, SetnewVehicles] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/app/category/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          SetnewVehicles(data);
        });
    },[])
       
    
 

  return (
    <div className="Order">
      <div className="item-list">
        <h1 style={{ fontSize: "20px", float: "left", fontFamily: "Quicksand" }}>
                  Category ID :{id}
        </h1>
    
       
        {newVehicles && (<div>
        {newVehicles.Vehicles.map((vehicle) => (
            <div className="item" key={vehicle._id}>
            <div className="text-content">
                    <p>Name :{vehicle.Name }</p>
                    <p>Model :{vehicle.Model}</p>
                    <p>Type:{vehicle.Type}</p>
                    <p>Code :{vehicle.Code } </p>
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