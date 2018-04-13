import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text: text,
        id
    }
}

const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

const thumbUp = id => {
    return {
        type: THUMB_UP,
        id
    }
}

const thumbDown = id => {
    return {
        type: THUMB_DOWN,
        id
    }
}