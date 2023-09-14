import { Injectable } from '@angular/core';
import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  protected showsList: Show[] = [
    {
      "series": "Stranger Things",
      "series_img": "https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg",
      "genre": "Science fiction, Horror fiction",
      "number_of_seasons": 4,
      "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      "platform": "Netflix",
      "id": 1,
      "link_name": "stranger_things",
      "rotten_tomatoes": 97
    },
    {
      "series": "The Crown",
      "series_img": "https://m.media-amazon.com/images/M/MV5BZTEyNjBjYmYtYWYxYi00MmQyLThlYmItY2I4NzM1Mjg1MWYxXkEyXkFqcGdeQXVyMTU3ODI3MTk2._V1_.jpg",
      "genre": "Historical drama",
      "number_of_seasons": 5,
      "description": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      "platform": "Netflix",
      "id": 2,
      "link_name": "the_crown",
      "rotten_tomatoes": 86
    },
    {
      "series": "The Mandalorian",
      "series_img": "https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-poster-s3-serieslp_aa55f7a4.jpeg?region=0%2C0%2C1024%2C1517", 
      "genre": "Space Western, Science fiction", 
      "number_of_seasons":2, 
      "description": "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.", 
      "platform": "Disney Plus", 
      "id": 3, 
      "link_name": "the_mandalorian", 
      "rotten_tomatoes": 90
    },
    {
      "series": "The Boys", 
      "series_img": "https://www.gravillisinc.com/wp-content/uploads/2022/07/THBY_S3_OOHOther_Boys_Vertical_Pre_34x44_Final_en-US_PRICO-791x1024.jpg", 
      "genre": "Superhero, Black comedy", 
      "number_of_seasons":2, 
      "description": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.", 
      "platform": "Prime", 
      "id": 4, 
      "link_name": "the_boys",
      "rotten_tomatoes": 93
    },
    {
      "series": "The Witcher", 
      "series_img": "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", 
      "genre": "Fantasy, Drama",
      "number_of_seasons": 2,
      "description": "A solitary monster hunter, Geralt of Rivia, struggles to find his place in a world where people often prove more wicked than beasts.", 
      "platform": "Netflix", 
      "id": 5, 
      "link_name": "the_witcher",
      "rotten_tomatoes": 80
    },
    {
      "series": "Fleabag",
      "series_img": "https://m.media-amazon.com/images/M/MV5BNGM4YjNiOTAtYzAzYS00ZThlLTlhNDEtMTlhOTcxYTY3ZTNkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
      "genre": "Comedy, Drama", 
      "number_of_seasons": 2, 
      "description": "A young woman tries to cope with life in London whilst coming to terms with a recent tragedy.", 
      "platform": "Prime",
      "id": 6, 
      "link_name": "fleabag",
      "rotten_tomatoes": 100
    },
    {
      "series": "Sonic Prime",
      "series_img": "https://m.media-amazon.com/images/M/MV5BYzUwZjdjMjQtMjg0OC00MTVjLThkY2MtYzhiY2Q1ZDI5NzBlXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_FMjpg_UX1000_.jpg",
      "genre": "Animation, Action, Adventure",
      "number_of_seasons": 1,
      "description": "Sonic's adventure takes him to the strange and surreal Shatterverse where he confronts the fate of the multiverse.",
      "platform": "Netflix",
      "id": 7,
      "link_name": "sonic_prime",
      "rotten_tomatoes": 85
    },
    {
      "series": "The Last of Us",
      "series_img": "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg",
      "genre": "Action, Adventure, Drama",
      "number_of_seasons": 1,
      "description": "Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across post-pandemic America.",
      "platform": "Prime",
      "id": 8,
      "link_name": "the_last_of_us",
      "rotten_tomatoes": 95
    },
    {
      "series": "Loki",
      "series_img": "https://m.media-amazon.com/images/M/MV5BZjdhNWNiODQtOGU2Ni00MzFjLTgzMTgtOWYwZGMyYzUwYTI0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg", 
      "genre": "Action, Adventure, Fantasy", 
      "number_of_seasons": 2, 
      "description": "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”", 
      "platform": "Disney Plus",
      "id": 9,
      "link_name": "loki",
      "rotten_tomatoes": 92
    }
  ]

    getAllShows(): Show[] {
      return this.showsList;
    }

    getShowById(id: number): Show | undefined {
      return this.showsList.find(show => show.id === id);
    }
}
