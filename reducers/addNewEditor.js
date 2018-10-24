const initialState = {
    isOpen: false
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_ADD_NEW_EDITOR':
            return {
                isOpen: true
            }
        case 'CLOSE_ADD_NEW_EDITOR':
            return initialState;
        default:
            return state;
    }
}