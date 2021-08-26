import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms : Observable<Room[]>;
  constructor(
    private router: Router,
    private roomService : RoomService,
  ) {

   }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
   this.rooms = this.roomService.getRoomList();
  }

  deleteRoom (id : number){
    this.roomService.deleteRoom(id);
  }
  roomDetails(id:string){
    this.router.navigate(['details',id]);
  }
  updateRoom(id :string){
    this.router.navigate(['update',id]);
  }

}
