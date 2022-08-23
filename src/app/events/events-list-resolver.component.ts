import { Resolve } from '@angular/router';
import { EventService } from './shared/events.shared';
import { Injectable } from '@angular/core';

@Injectable()
export class EventsListResolver implements Resolve<any>{
constructor(private eventService:EventService){
    
}

    resolve() {
    return this.eventService.getEvents()    
    }
}