//Інформація тільки про каунтер

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                counter: state.counter += 1
            }
        case "MINUS":
            return {
                counter: state.counter -= 1
            }
        case "OnTwo":
            return {
                counter: state.counter *= 2
            }
        case "PlusTwo":
            return {
                counter: state.counter += 2
            }
        case "InTwo":
            return {
                counter: state.counter /= 2
            }
        case "MinusTwo":
            return {
                counter: state.counter -= 2
            }
        case "Zero":
            return {
                counter: state.counter *= 0
            }
        default:
            return state
    }
}
export default  CounterReducer