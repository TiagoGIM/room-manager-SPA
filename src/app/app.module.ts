import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './modules/room/room.component';
import { CreateRoomComponent } from './modules/create-room/create-room.component';
import { UpdateRoomComponent } from './modules/update-room/update-room.component';
import { RoomListComponent } from './modules/components/room-list/room-list.component';
import { RoomDetailsComponent } from './modules/components/room-details/room-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    RoomListComponent,
    RoomDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
