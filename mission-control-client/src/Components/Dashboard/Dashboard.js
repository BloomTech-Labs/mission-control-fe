import React, { useEffect, useState } from 'react'
import { getData, secureRequest } from '../../Services/tempServices'

const Dashboard = ({ logout, getToken }) => {

	const [data, setData] = useState({})

	useEffect(() => {
		secureRequest(getToken, getData)
			.then(res => res && setData(res.data))
	}, []);

	return (
		<>
			<pre>{JSON.stringify(data, null, 4)}</pre>
			<div>This is the Dashboard view</div>
			<button type='submit' onClick={logout}>Logout</button>
		</>
	);
};

export default Dashboard;
