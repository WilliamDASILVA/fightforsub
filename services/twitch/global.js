import axios from 'axios';

const API_ENDPOINT = 'https://api.twitch.tv/kraken';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '72xdqxx634yc3xm17hb0uaxwplzfes',
  },
});

export default {
  getUser(user) {
    return axiosInstance.get(`/users/${user}`);
  },
  getUsers(users) {
    const userList = users.join(',');
    return axiosInstance.get(`/users?login=${userList}`);
  },
};
