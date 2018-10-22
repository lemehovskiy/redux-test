let nextTodoId = 0
export const addEvent = text => ({
    type: 'ADD_EVENT',
    id: nextTodoId++,
    text
})