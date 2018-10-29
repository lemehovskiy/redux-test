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
            dispatch({type: 'ADD_ITEM_ERROR', err})
        });
    }
}

export const removeItem = (id) => {
    return(dispatch, getState, { getFirestore }) => {

        const firestore = getFirestore();

        firestore.collection('post_list').doc(id).delete()
            .then(() => {
                dispatch({
                    type: 'REMOVE_ITEM'
                })
        }).catch((err) => {
            dispatch({type: 'REMOVE_ITEM_ERROR', err})
        });
    }
}

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