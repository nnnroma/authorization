import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { RequestService } from "../services/request.service";
import { authUser, authUserSuccess, getBoard, getBoardSuccess, getUser, getUserSuccess } from "./action";
import { map, switchMap } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { AuthService } from "../services/auth.service";

@Injectable()

export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private requestService: RequestService,
    private authService: AuthService,
  ) {}

  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBoard),
      switchMap(() => this.requestService.requestBoard().pipe(
        map((boards) => {
          return getBoardSuccess({boards})
        }),
      ))
    )
  )

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(() => this.requestService.requestUsers().pipe(
        map((users) => {
          return getUserSuccess({users})
        })
      ))
    )
  )

  loginUser$ = createEffect(() => this.actions$.pipe(
      ofType(authUser),
      switchMap(({email, password}) => this.authService.authRequest(email, password)
        .pipe(
          map(data => authUserSuccess(data)),
        )
      )
    )
  );

}
