import React, { useState ,useEffect}  from 'react';





const ProductList = () => {

	const[Products, setProducts] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:5000/app`)
		  .then((res) => {
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setProducts(data);
		  });
	}, []);

	
	return (
		<div>
			<h4 className="Listname">Product List</h4>
		<div className="List">
			
			
			<table className="table">
				<thead>
					<tr className="head">
						<th>ID</th>
						<th>Name</th>
						<th>Model</th>
						<th>Code</th>
						  
					</tr>
				</thead>
				{Products && (
					<tbody>
					{Products.map((Product) => {
						return (
							<tr className="rw" key={Product._id}>
								<td>{Product._id}</td>
								<td>{Product.Name}</td>
								<td>{Product.Amount}</td>
								<td>{Product.Instock}</td>
								
								
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

export default ProductList;