import React, { useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Sigin() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const navigate=useNavigate();
  return (

    <>

    <div>
        <Header/>
    </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 sign">
      <div className="bg-transparent p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('Form data:', formData);
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full bg-slate-400 px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full   bg-slate-400 px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full   bg-slate-400  px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full  bg-slate-400 px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                    Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full  bg-slate-400 px-3 py-2 border rounded"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="buyer" onClick={()=>navigate("/buyer")}>Buyer</option>
                    <option value="seller">Seller</option>
                    
                  </select>
                </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
          <div className="mb-4 text-center">
            <span className="text-white text-xl"> Have an account? </span>
            <p  className="text-gray-300 text-xl hover:underline" onClick={()=>navigate("/")}>Login</p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}