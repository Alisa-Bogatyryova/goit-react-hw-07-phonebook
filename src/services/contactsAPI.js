import axios from 'axios';

axios.defaults.baseURL = 'https://61be43fd2a1dd4001708a2a8.mockapi.io/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const postData = await axios.post('/contacts', contact);

  return postData;
};