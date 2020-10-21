import getPosts from '../services/post_api';

const loadPostsAction = async(dispatch) => {
    const res = await getPosts()
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
}

export default loadPostsAction;