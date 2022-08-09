export interface Album {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    album_group:            AlbumGroup;
    album_type:             AlbumGroup;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumGroup;
    uri:                    string;
}

export enum AlbumGroup {
    Album = "album",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          Type;
    uri:           URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The6S2OmqARrzebs0TKUEyXyp = "6S2OmqARrzebs0tKUEyXyp",
}

export enum Name {
    DemiLovato = "Demi Lovato",
}

export enum Type {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist6S2OmqARrzebs0TKUEyXyp = "spotify:artist:6S2OmqARrzebs0tKUEyXyp",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}
