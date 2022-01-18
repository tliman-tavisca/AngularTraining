import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { Store } from "../../../store";
import { SongsService } from "../../services/songs.service";

@Component({
  selector: "songs-playlist",
  template: `
    <div class="songs">
      Playlist
      <div *ngFor="let item of playlist$ | async">
        {{ item.artist }} :
        {{ item.track }}
      </div>
    </div>
  `,
})
export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit(): void {
    this.playlist$ = this.songsService.getPlaylist$;
    this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
