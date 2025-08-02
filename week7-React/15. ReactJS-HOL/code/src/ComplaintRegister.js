import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const generateReferenceNumber = () => {
    // Simple reference number: EMP + timestamp
    return 'EMP' + Date.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName.trim() || !complaint.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    const refNumber = generateReferenceNumber();
    alert(`Complaint submitted!\nReference Number: ${refNumber}`);
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div className="complaint-register">
      <h2>Register a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={employeeName}
            onChange={e => setEmployeeName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={e => setComplaint(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
