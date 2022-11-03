import { Component, OnInit } from '@angular/core';
import { RequestService } from "../services/request.service";
import { getUser } from "../store/action";
import { Store } from "@ngrx/store";
import { selectUser } from "../store/select";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users$ = this.store.select(selectUser);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',];
  dataSource = this.users$;

  constructor(
    private requestServices: RequestService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getUser())
  }

}
