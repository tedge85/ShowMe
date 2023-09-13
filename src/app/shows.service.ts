import { Injectable } from '@angular/core';
import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  protected showsList: Show[] = [
    {
      "series": "Stranger Things",
      "series_img": "img/stranger_things.jpg",
      "genre": "Science fiction, Horror fiction",
      "number_of_seasons": 4,
      "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      "platform": "Netflix",
      "id": 1
    },
    {
      "series": "The Crown",
      "series_img": "img/the_crown.jpg",
      "genre": "Historical drama",
      "number_of_seasons": 5,
      "description": "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      "platform": "Netflix",
      "id": 2
    },
    {
      "series": "The Mandalorian",
      "series_img": "img/the_mandalorian.jpg",
      "genre": "Space Western, Science fiction",
      "number_of_seasons": 2,
      "description": "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      "platform": "Disney Plus",
      "id": 3
    },
    {
      "series": "The Boys",
      "series_img": "img/the_boys.jpg",
      "genre": "Superhero, Black comedy",
      "number_of_seasons": 2,
      "description": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
      "platform": "Prime",
      "id": 4
    },
    {
      "series": "The Witcher",
      "series_img": "img/the_witcher.jpg",
      "genre": "Fantasy, Drama",
      "number_of_seasons": 2,
      "description": "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
      "platform": "Netflix",
      "id": 5
    },
    {
      "series": "Fleabag",
      "series_img": "img/fleabag.jpg",
      "genre": "Comedy, Drama",
      "number_of_seasons": 2,
      "description": "A young woman tries to cope with life in London whilst coming to terms with a recent tragedy.",
      "platform": "Prime",
      "id": 6
    },
    {
      "series": "The Marvelous Mrs. Maisel",
      "series_img": "img/the_marvelous_mrs_maisel.jpg",
      "genre": "Comedy, Drama",
      "number_of_seasons": 4,
      "description": "A housewife in the 1950s decides to become a stand-up comic.",
      "platform": "Prime",
      "id": 7
    },
    {
      "series": "The Umbrella Academy",
      "series_img": "img/the_umbrella_academy.jpg",
      "genre": "Superhero, Science fiction",
      "number_of_seasons": 3,
      "description": "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
      "platform": "Netflix",
      "id": 8,
    }];

    getAllShows(): Show[] {
      return this.showsList;
    }

    getShowById(id: number): Show | undefined {
      return this.showsList.find(show => show.id === id);
    }
}
