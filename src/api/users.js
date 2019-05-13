import axios from 'axios';

export const getUsers = () => {
  return axios.get('http://rem-rest-api.herokuapp.com/api/users', {
    params: {
      limit: 1000
    }
  });
};

export const createUser = ({ firstName, lastName }) => {
  return axios.post('http://rem-rest-api.herokuapp.com/api/users', {
    firstName,
    lastName
  });
};

export const deleteUser = userId => {
  return axios.delete(`http://rem-rest-api.herokuapp.com/api/users/${userId}`);
};
