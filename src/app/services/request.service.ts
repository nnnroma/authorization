import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoard, IGraph, IPreparedGraph, IUser } from "../store/interfaces";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(
    private http: HttpClient,
  ) { }

  requestBoard(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>('https://ds-test-api.herokuapp.com/api/userassessments');
  }

  requestGraph(id: number): Observable<IPreparedGraph> {
    const params = new HttpParams().append('id', id)
    return this.http.get<IGraph>('https://ds-test-api.herokuapp.com/api/userassessment/graph', {params})
      .pipe(
        map((graph: IGraph) => {
          const labels = Object.keys(graph.data);
          const data = {data: Object.values(graph.data)}

          return ({labels, datasets: [data]})
        })
      )
  }

  requestUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>('https://ds-test-api.herokuapp.com/api/users')
  }

}
