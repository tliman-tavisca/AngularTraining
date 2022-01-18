import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "../../../store";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

@Component({
  selector: "songs-listened",
  template: `
    <div class="songs">
      Listened
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }} :
        {{ item.track }}
      </div>
    </div>
  `,
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.listened$ = this.store
      .select("playlist")
      .filter(Boolean)
      .map((playlist) => playlist.filter((track) => track.listened));
  }
}
