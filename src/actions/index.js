import axios from 'axios';

const API_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=sdflksdokjekfeokkdiiekei';

export const FETCH_POSTS = 'FETCH_POSTS';

export const CREATE_POSTS = 'CREATE_POSTS';

export const GET_POST = 'GET_POST';

export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => {
    const request = axios.get(`${API_URL}posts${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    }
};


export const createPost = (props) => {
    const request = axios.post(`${API_URL}posts${API_KEY}`, props)
    return {
        type: CREATE_POSTS,
        payload: request
    }
};

export const getPost = (id) => {
    const request = axios.get(`${API_URL}posts/${id}${API_KEY}`)
    return {
        type: GET_POST,
        payload: request
    }
};

export const deletePost = (id) => {
    const request = axios.delete(`${API_URL}posts/${id}${API_KEY}`)
    return {
        type: DELETE_POST,
        payload: request
    }
};
