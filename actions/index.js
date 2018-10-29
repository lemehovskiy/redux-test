let nextTodoId = 2;

export const addItem = (post) => {
    return(dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();

        firestore.collection('post_list').add({
            ...post
        }).then(() => {
            dispatch({
                type: 'ADD_ITEM',
                post
            })
        }).catch((err) => {
            console.log(err)
            // dispatch({type: 'CREATE_PROJECT_ERROR', err})
        });
    }
}

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id: id
})

export const openItemEditor = (id) => ({
    type: 'OPEN_ITEM_EDITOR',
    id: id
})

export const closeItemEditor = (id) => ({
    type: 'CLOSE_ITEM_EDITOR',
    id: id
})

export const saveItem = (id, title, storeName) => ({
    type: 'SAVE_ITEM',
    id: id,
    title,
    storeName
})

export const openAddNewEditor = () => ({
    type: 'OPEN_ADD_NEW_EDITOR'
})

export const closeAddNewEditor = () => ({
    type: 'CLOSE_ADD_NEW_EDITOR'
})

export const showModal = (id, modalType, modalProps) => ({
    type: 'SHOW_MODAL',
    modalType,
    modalProps
})

export const hideModal = () => ({
    type: 'HIDE_MODAL'
})