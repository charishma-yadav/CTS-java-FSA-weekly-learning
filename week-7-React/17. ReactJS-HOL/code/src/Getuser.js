import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const user = data.results[0];
      this.setState({ user, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }
    if (!user) {
      return <div>No user data found.</div>;
    }
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>User Details</h2>
        <p>Title: {user.name.title}</p>
        <p>First Name: {user.name.first}</p>
        <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
      </div>
    );
  }
}

export default Getuser;
