const postRecuder = (state = { list: [{ id: 0, name: '我是疯子乔' }] }, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
export default postRecuder;