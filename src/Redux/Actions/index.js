import { ADD_POST, DEL_POST, EDIT_POST } from "../constants"

export const addPostAction = (post) => {
  return { type: ADD_POST, payload: post }
}

export const delPostAction = (post) => {
  return { type: DEL_POST, payload: post }
}

export const editPostAction = (post) => {
  return { type: EDIT_POST, payload: post }
}