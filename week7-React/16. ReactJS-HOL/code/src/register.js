import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let error = '';
    if (field === 'name') {
      if (value.trim().length < 5) {
        error = 'Name must be at least 5 characters.';
      }
    }
    if (field === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        error = 'Email must contain @ and .';
      }
    }
    if (field === 'password') {
      if (value.length < 8) {
        error = 'Password must be at least 8 characters.';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validate('name', form.name),
      email: validate('email', form.email),
      password: validate('password', form.password),
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      alert('Registration successful!');
      setForm({ name: '', email: '', password: '' });
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleChange}
            required
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleChange}
            required
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleChange}
            required
          />
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
