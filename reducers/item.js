const initialState = {
    itemsInEditMode: []
};

export default function itemsList(state = initialState, action) {
    let updatedItems = [];

    switch (action.type) {

        case 'ADD_ITEM':
            return state;

        case 'ADD_ITEM_ERROR':
            console.log('ADD_ITEM_ERROR', action.err)
            return state;

        case 'REMOVE_ITEM':
            return state;

        case 'REMOVE_ITEM_ERROR':
            console.log('REMOVE_ITEM_ERROR', action.err)
            return state;

        case 'OPEN_ITEM_EDITOR':
            console.log(state);
            return {itemsInEditMode: [...state.itemsInEditMode, action.id]}

        case 'CLOSE_ITEM_EDITOR':
            let index = state.itemsInEditMode.indexOf(action.id);
            if (index > -1) {
                array.splice(index, 1);
            }

            updatedItems = state.itemsInEditMode.push(action.id)
            return updatedItems;

        case 'SAVE_ITEM':
            updatedItems = state.map(item => {
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
