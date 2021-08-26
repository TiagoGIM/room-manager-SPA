import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  submitted = false;
  room: Room = new Room();
  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  save() {
    this.roomService.createRoom(this.room)/*
    .subscribe(
    data => log(data),
    error => log(error));
    */
    this.goToList();
    this.room = new Room();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  newRoom() {
    this.submitted = false;
    this.room = new Room();
  }
  goToList() { this.router.navigate(['/rooms']) }
}
