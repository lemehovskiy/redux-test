let nextTodoId = 2;

export const addItem = (title, storeName) => ({
    type: 'ADD_ITEM',
    id: nextTodoId++,
    title,
    storeName
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id: id
})

export const editItem = (id) => ({
    type: 'EDIT_ITEM',
    id: id
})

export const saveItem = (id, title, storeName) => ({
    type: 'SAVE_ITEM',
    id: id,
    title,
    storeName
})


export const showModal = (id, modalType, modalProps) => ({
    type: 'SHOW_MODAL',
    modalType,
    modalProps
})

export const hideModal = () => ({
    type: 'HIDE_MODAL'
})