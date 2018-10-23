const initialState = {
    modalType: null,
    modalProps: {}
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps
            }
        case 'HIDE_MODAL':
            console.log('hide_modal');
            return initialState;
        default:
            return state;
    }
}
