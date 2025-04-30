import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'Yes',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password } = formData;
    if(fullName && phone && email && password) {
      navigate('/account');
    } else {
      alert('Please fill all required fields!');
    }
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <input type="text" name="company" placeholder="Company name" value={formData.company} onChange={handleChange} />
      
      <div className="radio-group">
        <p>Are you an Agency?</p>
        <label>
          <input type="radio" value="Yes" name="agency" checked={formData.agency === 'Yes'} onChange={handleChange} />
          Yes
        </label>
        <label>
          <input type="radio" value="No" name="agency" checked={formData.agency === 'No'} onChange={handleChange} />
          No
        </label>
      </div>

      <button className="primary" onClick={handleSubmit}>Create Account</button>
    </div>
  );
}

export default Register;
