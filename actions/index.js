let nextTodoId = 2;

export const addItem = (title, storeName) => ({
    type: 'ADD_ITEM',
    id: nextTodoId++,
    title,
    storeName
})


export const toggleRemove = (id) => ({
    type: 'REMOVE_ITEM',
    id: id
})