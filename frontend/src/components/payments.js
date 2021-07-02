import React ,{useState,useEffect} from 'react';


import 'date-fns';





const Payment = () => {

   
    
    const [vehicleOptions, setVehicleOptions] = useState([]);
	const [categoryOptions, setCategoryOptions] = useState([]);
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
			setCategoryOptions(
							data.map((category) => {
							return { value: category._id, label: category.Name };
							})
			  )
			  
			  console.log(categoryOptions);
		  });
				
		  
	}, []);

	const handleCategoryOptions = (e) => {
		setRental({ ...rental, type: e.target.value });

		fetch(`http://localhost:5000/app/${e.target.value}`)
		.then((res) => {
			return res.json();
		  })
			.then((data) => {
				console.log(data);
				setVehicleOptions(
					data.Vehicles.map((vehicle) => {
						return {
							value: vehicle._id,label: vehicle.Model + " " + vehicle.Name,
						};
					})
				);
		  }).catch((error) => console.log(error.message));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(rental.type);

		const type = rental.type;
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
						<label htmlFor="passMark" className="form-label">
							Duration (Days)
						</label>
						<input
							type="number"
							className="form-control"
							id="passMark"
							value={rental.duration}
							onChange={(e) =>
								setRental({ ...rental, duration: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="row">
					<div className=" mb-3 col">
						<label className="form-label">Select Category</label>
						<select
							className="form-select"
							aria-label="Default select example"
							onChange={handleCategoryOptions}
						>
							<option value=" " disabled selected>
								Select
							</option>
							{categoryOptions.map((categoryOption) => {
								return (
									<option key={categoryOption.value} value={categoryOption.value}>
										{categoryOption.label}
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
								setRental({ ...rental, vehicle: e.target.value })
							}
						>
							<option value="" disabled selected>
								Select
							</option>
							{vehicleOptions.map((vehicleOption) => {
								return (
									<option key={vehicleOption.value} value={vehicleOption.value}>
										{vehicleOption.label}
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