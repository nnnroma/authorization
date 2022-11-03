import { createReducer, on } from "@ngrx/store";
import { authUserSuccess, getBoardSuccess, getUserSuccess } from "./action";
import { IAuth, IBoard, IUser } from "./interfaces";

export interface IState {
  boards: IBoard[],
  users: IUser[],
  data: IAuth,
}

export const initialState: IState = {
  boards: [],
  users: [],
  data: {
    first_name: '',
    last_name: '',
    role: '',
    token: ''
  }
}

export const boardsReducer = createReducer(
  initialState,
  on(getBoardSuccess,(state, { boards }) => ({...state, boards})),
  on(getUserSuccess, (state, { users }) => ({...state, users})),
  on(authUserSuccess, (state, data ) => ({...state, data}))
)



