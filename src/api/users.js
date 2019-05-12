import axios from 'axios';

export const getUsers = () => {
  return axios.get('http://rem-rest-api.herokuapp.com/api/users', {
    params: {
      limit: 1000
    }
  });
};
