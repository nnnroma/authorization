import { Component, OnInit } from '@angular/core';
import { RequestService } from "../services/request.service";
import { getBoard } from "../store/action";
import { Store } from '@ngrx/store';
import { selectBoard } from "../store/select";

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})

export class InfoPageComponent implements OnInit {

  boards$ = this.store.select(selectBoard);

  constructor(
    private requestService: RequestService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getBoard())
  }

}
