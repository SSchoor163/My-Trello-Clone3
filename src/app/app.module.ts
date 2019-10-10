import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from 'src/services/todo.service';
import {MatTableModule} from '@angular/material'



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
