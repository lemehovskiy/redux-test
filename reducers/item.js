export default function itemsList(state = [], action) {
    let updatedItems = [];

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

        case 'OPEN_ITEM_EDITOR':
            updatedItems = state.map(item => {
                if (item.id === action.id) {
                    return {...item, editMode: true}
                }
                return item
            })
            return updatedItems

        case 'CLOSE_ITEM_EDITOR':
            updatedItems = state.map(item => {
                if (item.id === action.id) {
                    return {...item, editMode: false}
                }
                return item
            })
            return updatedItems

        case 'SAVE_ITEM':
            updatedItems = state.map(item => {
                console.log(action.title);
                if (item.id === action.id) {
                    return {...item, title: action.title, storeName: action.storeName}
                }
                return item
            })
            return updatedItems

        default:
            return state;


    }
}
