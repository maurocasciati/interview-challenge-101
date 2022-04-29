import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [cityId, setCityId] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    setName('');
    setUsername('');
    setPassword('');
    setAddress('');
    setCityId('');
    return alert('Entered Values are: '+ name +', '+username+', '+password+', '+address+', '+cityId+', ')
  };

  return(
    <Container>
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="form.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Your username"
            required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Your password"
            required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Address">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Your address"
            required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.City">
          <Form.Label>City</Form.Label>
          <Form.Select value={cityId} onChange={(event) => setCityId(event.target.value)}>
            <option>Select you city</option>
            <option value="1">Buenos Aires, Argentina</option>
            <option value="2">Cordoba, Argentina</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">Signup</Button>
      </Form>
    </Container>
  );
}
export default SignupPage;