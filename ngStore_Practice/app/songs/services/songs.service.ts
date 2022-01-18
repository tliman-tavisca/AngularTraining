import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Store } from "../../store";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class SongsService {
  // get data from API and store in store
  getPlaylist$ = this.http
    .get("api/playlist")
    .map((response) => response.json())
    .do((next) => this.store.set("playlist", next));

  constructor(private http: Http, private store: Store) {}
}
