export default function events(state = [], action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        default:
            return state;
    }
}
