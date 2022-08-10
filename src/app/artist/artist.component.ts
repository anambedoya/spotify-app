import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/album';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistId: string | null = localStorage.getItem('artistId');
  albums!: Item[];
  cover!: string;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  pageTotal: number = 100;
  offset: number = 0;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getArtistAlbums(this.artistId, this.pageSize, this.offset).subscribe((resp) => {
      this.albums = resp.items;
      this.pageTotal = resp.total;
    });
  }

  onChangePage(event: any) {
    if(event.previousPageIndex == event.pageIndex) {
      this.pageSize = event.pageSize;
    } else if(event.previousPageIndex > event.pageIndex) {
      this.offset-=event.pageSize;
    } else {
      this.offset+=event.pageSize;
    }

    this.spotifyService.getArtistAlbums(this.artistId, this.pageSize, this.offset).subscribe(({items}) => {
      this.albums = items;
    });
  }

}
