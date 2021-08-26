import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  id:number;
  room : Room;
  submitted : boolean = false;
  constructor(
    private route :ActivatedRoute,
    private $router : Router,
    private roomServ : RoomService
  ) { }

  ngOnInit(){
    this.room = new Room();
    this.id =  this.route.snapshot.params.id;
    this.roomServ.getRoom(this.id);/*
    .subscribe(
      data => {
        console.log(data)
        this.room = data
      },
      error => log
    );
    */
  }
  updateRoom(){
    this.roomServ.updateRoom(this.id,this.room);/*
    .subscribe(
      data  =>console.log,
      error =>console.log
    );
    */
    this.gotolist();
  }
  onSubmit(){
    this.updateRoom();
  }
  gotolist(){
    this.$router.navigate(['/rooms'])
  }

}
