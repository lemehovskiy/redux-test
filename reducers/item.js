export default function itemsList(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    storeName: action.storeName
                }
            ]

        case 'REMOVE_ITEM':
            return state.filter(itemsList => itemsList.id !== action.id);
        default:
            return state;
    }
}
