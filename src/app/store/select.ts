import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "./reducer";
import { IAuth } from "./interfaces";

export const boardsSelectorKey = 'boards_state';
export const boardsFeatureSelector = createFeatureSelector<IState>(boardsSelectorKey);
export const selectBoard = createSelector(boardsFeatureSelector, (state: IState) => state.boards)

export const userFeatureSelector = createFeatureSelector<IState>(boardsSelectorKey);
export const selectUser = createSelector(userFeatureSelector, (state: IState) => state.users)

export const authFeatureSelector = createFeatureSelector<IAuth>(boardsSelectorKey);
// @ts-ignore
export const selectAuth = createSelector(authFeatureSelector, (state: IState) => state.data)
