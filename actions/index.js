let nextTodoId = 2;

export const addItem = title => ({
    type: 'ADD_ITEM',
    id: nextTodoId++,
    title
})