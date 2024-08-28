import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor() { }

  files: any = [
    {
      id: '3ffeb8815fdcf4b37d5ae7b1ca521787',
      url:
        "https://zaycev.meteor.zerocdn.com/3ffeb8815fdcf4b37d5ae7b1ca521787:2024082813/track/16715842.mp3",
      name: "Танкис летёха",
      artist: "Денис Майданов",
      fileName: '16715842.mp3'
    },
    {
     id: '73e4df54de5ea32bda4aefc036065229',
      url:
        "https://zaycev.midgard.zerocdn.com/73e4df54de5ea32bda4aefc036065229:2024082813/track/24831724.mp3",
      name: "Песня лисы Алисы",
      artist: "Приключения Электроников",
      fileName: '24831724.mp3'
    },
    {
      id: '82ddfb6323443187541e9b4c10a9d28b',
      url:
        "https://zaycev.zigzag.zerocdn.com/82ddfb6323443187541e9b4c10a9d28b:2024082813/track/24831725.mp3",
      name: "Песня Трубадура",
      artist: "Приключения Электроников",
      fileName: '24831725.mp3'
    },
    {
      id: 'c1c9c148da778264bc3a9a937a72d7b6',
      url:
        "https://zaycev.grendel.zerocdn.com/c1c9c148da778264bc3a9a937a72d7b6:2024082813/track/11590892.mp3",
      name: "Зверь",
      artist: "Ария",
      fileName: '11590892.mp3'
    }
  ];

  getFiles() {
    return of(this.files);
  }
}

