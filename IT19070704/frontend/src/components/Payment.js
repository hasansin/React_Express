import React ,{useState,useEffect} from 'react';


import 'date-fns';





const Payment = () => {

   
    
    const [ProductOptions, setProductOptions] = useState([]);
	const [VehicleOptions, setVehicleOptions] = useState([]);
	const [rental, setRental] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [total, setTotal] = useState(0);
      
	useEffect(() => {

		fetch(`http://localhost:5000/app/get`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setVehicleOptions(
							data.map((vehicle) => {
							return { value: vehicle._id, label: vehicle.type };
							})
			  )
			  
			  console.log(VehicleOptions);
		  });
				
		  
	}, []);

	const handleVehicleOptions = (e) => {
		setRental({ ...rental, type: e.target.value });

		fetch(`http://localhost:5000/app/getAllProductsInVehicle/${e.target.value}`)
		.then((res) => {
			return res.json();
		  })
			.then((data) => {
				console.log(data);
				setProductOptions(
					data.Products.map((Product) => {
						return {
							value: Product._id,label: Product.Code + " " + Product.Name,
						};
					})
				);
		  }).catch((error) => console.log(error.message));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(rental.type);

		
		fetch('http://localhost:5000/app/rent', {
            method: 'POST',
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json", },
				body: JSON.stringify(rental)
		
               }).then((res) => {
				return res.json();
			   }).then((data) => {
				   console.log(data);
				setTotal(data.charges);
				   setIsSubmitted(true);
			   }).catch((error) => console.log(error.message));
	
			
	};
    

    
    
    
   

    return (
        <div>
          
            
			<form className="rounded border p-5 bg-light w-75 d-flex flex-column mx-auto" style={{marginTop :'100px'}}>
				<div className="row">
					<div className="mb-3 col">
					
					</div>
				</div>
				<div className="row">
					<div className=" mb-3 col">
						<label className="form-label">Select Category</label>
						<select
							className="form-select"
							aria-label="Default select example"
							onChange={handleVehicleOptions}
						>
							<option value=" " disabled selected>
								Select
							</option>
							{VehicleOptions.map((VehicleOption) => {
								return (
									<option key={VehicleOption.value} value={VehicleOption.value}>
										{VehicleOption.label}
									</option>
								);
							})}
						</select>
					</div>
					<div className=" mb-3 col">
						<label className="form-label">Select Vehicle</label>
						<select
							className="form-select"
							aria-label="Default select example"
							onChange={(e) =>
								setRental({ ...rental, product: e.target.value })
							}
						>
							<option value="" disabled selected>
								Select
							</option>
							{ProductOptions.map((ProductOption) => {
								return (
									<option key={ProductOption.value} value={ProductOption.value}>
										{ProductOption.label}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<button
					type="submit"
					className="bttn"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
			<div >
			{isSubmitted && (
				<div className="alert alert-success w-75 mx-auto mt-5" role="alert">
					Your request has been submitted and your total charges will be Rs.{total}
				</div>
			)}
				</div>
        
            </div>);
}

export default Payment;