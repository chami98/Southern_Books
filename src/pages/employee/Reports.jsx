import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../common/layout';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useState, useEffect } from 'react';
import SalesReports from './SalesReports';

const Reports = () => {

	const [selectedRange, setSelectedRange] = useState(1);
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// starts loading
		setLoading(true);
		axios
			.get(BASE_URL + `/orders?range=${selectedRange}`)
			.then((result) => {
				setOrders(result.data);
				setLoading(false);
			})

			.catch(() => {
				setLoading(false);
			});
	}, [selectedRange]);

	return (
		<Layout hideSideBar>
			<h1 style={{ marginTop: '80px', fontFamily: 'Comfortaa' }}>
				{' '}
				<i
					class="fas fa-layer-group"
					style={{ marginRight: '8px', marginBottom: '20px' }}
				></i>
				Reports
				<button
					onClick={() => setSelectedRange(1)}
					className={`btn ${
						selectedRange === 1
							? 'btn-primary'
							: 'btn-outline-primary'
					}`}
					style={{ margin: '0 10px' }}
				>
					Today
				</button>
				<button
					onClick={() => setSelectedRange(7)}
					className={`btn ${
						selectedRange === 7
							? 'btn-primary'
							: 'btn-outline-primary'
					}`}
					style={{ margin: '0 10px' }}
				>
					Last 7 days
				</button>
				<button
					onClick={() => setSelectedRange(30)}
					className={`btn ${
						selectedRange === 30
							? 'btn-primary'
							: 'btn-outline-primary'
					}`}
					style={{ margin: '0 10px' }}
				>
					Last 30 days
				</button>
			</h1>

			{loading ? (
				<div className="d-flex justify-content-center">
					<div
						className="spinner-border text-primary "
						style={{
							width: '5rem',
							height: '5rem',
							fontSize: '30px',
							marginTop: '30vh',
						}}
						role="status"
					>
						<span className="sr-only"></span>
					</div>
				</div>
			) : (
				<SalesReports orders={orders} />
			)}
		</Layout>
	);
};

export default Reports;
