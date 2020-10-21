const counterReducer = (state = { count: 1 }, action) => {
    switch (action.type) {
        case 'COUNT_ADD':
            return {
                ...state,
                count: state.count++
            }
        case 'COUNT_REDUCE':
            return {
                ...state,
                count: state.count--
            }

        default:
            return state;
    }
}
export default counterReducer;