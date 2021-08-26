import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  room : Room;
  id :number;
  constructor(
    private roomService : RoomService,
    private router : Router,
    private route :ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params.id;

    this.roomService.getRoom(this.id)
      .subscribe(data => this.room = data);
  }
  backToList(){
    this.router.navigate(['/rooms'])
  }

}
