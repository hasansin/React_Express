import React, { useState ,useEffect}  from 'react';





const VehicleList = () => {

	const[Vehicles, setVehicles] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:5000/app`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setVehicles(data);
		  });
	}, []);

	const deleteVehicle = (id) => {
		console.log(id);
		fetch(`http://localhost:5000/app/delete/${id}`,{
            method: 'DELETE',
           
		}).then(() => {
			const remainning = Vehicles.filter((vehicle) => vehicle !== id);
			setVehicles(remainning);
			console.log("deleted vehicle !!!");
		})
		
	}
	return (
		<div>
			<h4 className="Listname">Vehicle List</h4>
		<div className="List">
			
			
			
			<table className="table">
				<thead>
					<tr className="head">
						<th>ID</th>
						<th>Name</th>
						<th>Model</th>
						<th>Code</th>
						<th>Date</th>
						<th></th>
					</tr>
				</thead>
				{Vehicles && (
					<tbody>
					{Vehicles.map((Vehicle) => {
						return (
							<tr className="rw" key={Vehicle._id}>
								<td>{Vehicle._id}</td>
								<td>{Vehicle.Name}</td>
								<td>{Vehicle.Model}</td>
								<td>{Vehicle.Code}</td>
								<td>{Vehicle.date}</td>
								<td><button onClick={ ()=>deleteVehicle(Vehicle._id)} className="bttn">Delete</button></td>
							</tr>
						);
					})}
				</tbody>
				)}
			</table>

			</div>
		</div>
	);
};

export default VehicleList;


