import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Room } from '../model/room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'http://localhost:8081/ap1/v1/rooms';

  constructor(
    private http :HttpClient
  ) { }

  updateRoom(id: number, room: Room) {
    this.http.put(`${this.baseUrl}/${id}`,room);
  }
  getRoom(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createRoom(room: Room) :Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}}`,room);
  }
  deleteRoom(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  getRoomList(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }

}
