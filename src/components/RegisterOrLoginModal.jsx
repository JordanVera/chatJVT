import React, { useState } from 'react';
import { Box, TextField, Modal, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { url } from '../config.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RegisterOrLoginModal({ modalOpen, setModalOpen }) {
  const [loginOrRegister, setLoginOrRegister] = useState(false);
  const handleClose = () => setModalOpen(false);
  const { register, handleSubmit } = useForm();

  const registerNewUser = async (data) => {
    const { username, email, password } = data;

    const headers = {
      'Content-Type': 'Application/json',
    };

    await axios
      .post(`${url}/register`, { username, email, password }, { headers })
      .then((response) => {
        console.log(response);
      });
  };

  const loginUser = async (data) => {
    const { username, password } = data;

    const headers = {
      'Content-Type': 'Application/json',
    };

    await axios
      .post(`${url}/login`, { username, password }, { headers })
      .then((response) => {
        console.log(response);
      });
  };

  const getMe = async () => {
    await axios.get(`${url}/user`).then((response) => {
      console.log('response.fdata');
      console.log(response.data.user);
    });
  };

  const onError = (err) => {
    console.log(err);
    throw err;
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {!loginOrRegister ? (
            <Box sx={style}>
              <Button onClick={() => setLoginOrRegister(true)}>Change</Button>
              <h2>register</h2>
              <form
                onSubmit={handleSubmit(registerNewUser, onError)}
                method="POST"
              >
                <Box>
                  <TextField
                    label="username"
                    variant="outlined"
                    id="username"
                    required
                    {...register('username', { required: true })}
                  />
                  <TextField
                    type="email"
                    label="email"
                    variant="outlined"
                    id="email"
                    required
                    {...register('email', { required: true })}
                  />
                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    id="password"
                    required
                    {...register('password', { required: true })}
                  />
                </Box>
                <Button type="submit">Register</Button>
              </form>
            </Box>
          ) : (
            <Box sx={style}>
              <Button onClick={() => setLoginOrRegister(false)}>Change</Button>
              <h2>login</h2>
              <form onSubmit={handleSubmit(loginUser, onError)} method="POST">
                <Box>
                  <TextField
                    label="username"
                    variant="outlined"
                    id="username"
                    required
                    {...register('username', { required: true })}
                  />

                  <TextField
                    type="password"
                    label="password"
                    variant="outlined"
                    id="password"
                    required
                    {...register('password', { required: true })}
                  />
                </Box>
                <Button type="submit">Login</Button>
              </form>
            </Box>
          )}
        </Box>
      </Modal>
      <Button onClick={getMe}>Get Me</Button>
    </div>
  );
}
