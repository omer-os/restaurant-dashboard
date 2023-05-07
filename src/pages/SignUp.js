// pages/SignUp.js
import React, { useState } from 'react';
import { registerUser } from '../services/auth';

const SignUp = () => {
  const [formData, setFormData] = useState({
	email: '',
	displayName: '',
	phoneNumber: '',
  });

  const handleChange = (e) => {
	setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	try {
	  const newUser = await registerUser(formData);
	  console.log('New user registered:', newUser);
	} catch (error) {
	  console.error('Error registering user:', error);
	}
  };

  return (
	<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
	  <div className="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
	  </div>
	  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
		  <form onSubmit={handleSubmit}>
			<div className="mb-4">
			  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
				Email
			  </label>
			  <input
				id="email"
				name="email"
				type="email"
				autoComplete="email"
				required
				className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				value={formData.email}
				onChange={handleChange}
			  />
			</div>
			<div className="mb-4">
			  <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
				Display Name
			  </label>
			  <input
				id="displayName"
				name="displayName"
				type="text"
				autoComplete="displayName"
				required
				className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				value={formData.displayName}
				onChange={handleChange}
			  />
			</div>
			<div className="mb-6">
			<button
				type="submit"
				className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Sign Up
			</button>
			</div>
		</form>
		</div>
	</div>
	</div>
	);
};

export default SignUp;