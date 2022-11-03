import { createAction, props } from '@ngrx/store';
import { IAuth, IBoard, IUser } from "./interfaces";

export const getBoard = createAction('[Request Services], getBoard');
export const getBoardSuccess = createAction('[Request Services], getBoardSuccess', props<{ boards: IBoard[] }>());

export const getUser = createAction('[Request Services], getUser');
export const getUserSuccess = createAction('[Request Services], getUserSuccess', props<{ users: IUser[] }>());

export const authUser = createAction('[Request Services], authUser', props<{ email: string, password: string }>());
export const authUserSuccess = createAction('[Request Services], authUserSuccess', props<IAuth>())
