import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './events.shared';
@Injectable()
export class EventsResolver implements Resolve<any>{
constructor(private eventService:EventService){
   
}
    resolve(route:ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);    
    }
}