const dataAnswers = (state = [], action) => {
    switch (action.type) {
        case "DATA-ANSWERS":
            return action.data;
        default:
            return state;
    }
}
export default dataAnswers;