import { useState } from 'react';

import Layout from './../../common/layout';
import AddressSection from './addressSection';
import OrderSummary from './orderSummary';
import CustomerInformation from './customerInformation';

import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BASE_URL, SHIPPING_COST } from './../../constants';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router';

const Checkout = () => {
	const dispatch = useDispatch();
  const history = useHistory();

	const selectedBooks = useSelector((state) => state.cart.selectedBooks);
  const user = useSelector((state) => state.user.userDetails);

	let totalPrice = SHIPPING_COST;

	selectedBooks.forEach((book) => {
		totalPrice += book.price * book.selectedBookQty;
	});

	let schema = yup.object().shape({
		streetAddress: yup.string().required().min(3),
		townCity: yup.string().required().min(3),
		postcode: yup.string().required(),
		district: yup.string().required(),
		state: yup.string().required(),
		phoneNumber: yup.number().required().min(9),
	});

	let customerSchema = yup.object().shape({
		firstName: yup.string().required().min(3),
		lastName: yup.string().required().min(3),
		email: yup.string().required().email(),
	});

  const initinputs = {
		shippingAddress: {
			streetAddress: '',
			townCity: '',
			district: '',
			postcode: '',
			state: '',
			phoneNumber: '',
		},
		billingAddress: {
			streetAddress: '',
			townCity: '',
			district: '',
			postcode: '',
			state: '',
			phoneNumber: '',
		},
	}
	const [inputs, setInputs] = useState(initinputs);

  const initCustomerInputs = {
		firstName: '',
		lastName: '',
		email: '',
	}
	const [customerInputs, setCustomerInputs] = useState(initCustomerInputs);

	const [customerErrors, setCustomerErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});

	const [errors, setErrors] = useState({
		shippingAddress: {
			streetAddress: '',
			townCity: '',
			district: '',
			postcode: '',
			state: '',
			phoneNumber: '',
		},
		billingAddress: {
			streetAddress: '',
			townCity: '',
			district: '',
			postcode: '',
			state: '',
			phoneNumber: '',
		},
	});

	const handleAddressChange = (e, field, type) => {
		console.log('type', type);

		const newInputs = {
			...inputs,
		};

		switch (type) {
			case 'shipping':
				newInputs.shippingAddress = {
					...newInputs.shippingAddress,
					[field]: e.target.value,
				};
				break;

			case 'billing':
				newInputs.billingAddress = {
					...newInputs.billingAddress,
					[field]: e.target.value,
				};
				break;
		}
		setInputs(newInputs);

		const error = {};

		const inputsToValidate =
			type === 'shipping'
				? newInputs.shippingAddress
				: newInputs.billingAddress;

		try {
			schema.validateSync(
				{
					...inputsToValidate,
				},
				{ abortEarly: false }
			);
		} catch (err) {
			for (let i = 0; i < err.inner.length; i++) {
				error[err.inner[i].path] = err.inner[i].message;
			}
		} finally {
			const newErrors = {};
			switch (type) {
				case 'shipping':
					newErrors.shippingAddress = {
						...error,
					};
					// no need to change exsisting errors on other addresses
					newErrors.billingAddress = errors.billingAddress;
					break;

				case 'billing':
					newErrors.billingAddress = {
						...error,
					};
					// no need to change exsisting errors on other addresses
					newErrors.shippingAddress = errors.shippingAddress;
					break;
			}
			setErrors(newErrors);
		}
	};

	const validateInputs = () => {
		try {
			schema.validateSync(
				{
					...inputs.billingAddress,
				},
				{ abortEarly: false }
			);
		} catch (err) {
			return false;
		}

		try {
			schema.validateSync(
				{
					...inputs.shippingAddress,
				},
				{ abortEarly: false }
			);
		} catch (err) {
			return false;
		}

    try {
      customerSchema.validateSync(
        {
          ...customerInputs
        },
        { abortEarly: false }
      );
    } catch (err) {
      return false
    }

    return true;
	};

  const paymentsuccessCallback = () => {
    const order = {
      // shippingAddress , billing address
      ...inputs,
      items : [...selectedBooks],
      shippingcost : SHIPPING_COST,
      totalPrice,
      // user details
      uid: user.user.uid,
    }
    axios
            .post(BASE_URL + "/orders", { ...order })
            .then(() => {
              toast.success("Order created ", {
                position: "top-center",
                autoClose: 5500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              dispatch({
                type:'CLEAR_CART'
              })

              setTimeout(() => history.push("/home"), 3000)
          })
            .catch(() => console.log("Something went wrong"));
  }

  const handlePlaceOrder = () => {
		if (validateInputs()) {
			dispatch({
				type: 'INITIATE_PAYMENT',
				payload: {
					amount: totalPrice,
          callBack : paymentsuccessCallback,
				},
			});
		} else {
			toast.warning('fill all fields');
		}
	};
	return (
		<Layout hideSideBar>
			<h2 style={{ marginTop: '80px' }}>Checkout</h2>
			<div className="container" style={{ marginTop: '30px' }}>
				<div className="row">
					<div
						className="col-7"
						style={{ paddingLeft: '30px', paddingRight: '30px' }}
					>
						<CustomerInformation
							schema={customerSchema}
							inputs={customerInputs}
							setInputs={setCustomerInputs}
							errors={customerErrors}
							setErrors={setCustomerErrors}
						/>
						<AddressSection
							handleChange={handleAddressChange}
							inputs={inputs.shippingAddress}
							errors={errors.shippingAddress}
							title={'SHIPPING ADDRESS'}
							type={'shipping'}
						/>
						<AddressSection
							handleChange={handleAddressChange}
							inputs={inputs.billingAddress}
							errors={errors.billingAddress}
							title={'BILLING ADDRESS'}
							type={'billing'}
						/>

						<div className="row" style={{ marginTop: '10px' }}>
							<div className="col-8"></div>
							<div className="col-4">
								<button
									type="button"
									class="btn btn-success"
									style={{
										width: '100%',
										borderRadius: '5px',
									}}
									onClick={handlePlaceOrder}
								>
									PLACE ORDER
								</button>
							</div>
						</div>
					</div>
					<OrderSummary />
				</div>
			</div>
		</Layout>
	);
};

export default Checkout;
