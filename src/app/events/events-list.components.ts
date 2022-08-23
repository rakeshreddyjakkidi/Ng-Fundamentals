import { Component } from "@angular/core";
import { EventService } from "./shared/events.shared";
import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html',
    styles: [`
    .pad-left{margin-left:10px;}
    .well div{
        color:navy;
    }
    `] 
    
})
export class  EventsListComponent implements OnInit{

  events: any;

   constructor(private eventService:EventService, private route:ActivatedRoute){}  

ngOnInit(){

    /*this.eventService.getEvents().subscribe(event => { this.events = event });*/
    this.events = this.route.snapshot.data['events']

}


}