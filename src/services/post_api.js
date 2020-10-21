import { get } from 'axios';

const getPosts = () => get('https://jsonplaceholder.typicode.com/users');

export default getPosts;