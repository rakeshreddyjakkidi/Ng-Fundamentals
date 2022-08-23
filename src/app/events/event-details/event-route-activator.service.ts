import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { EventService } from "../shared/events.shared";
import {Router} from '@angular/router'


@Injectable()
export class EventRouteActivator  {

    constructor(private eventService:EventService,private router:Router){

    }

  /* canActivate(route: ActivatedRouteSnapshot) {
       const eventExists = !!this.eventService.getEvents(+route.params['id'])

       if(!eventExists)
           this.router.navigate(['/404'])

           return eventExists
        
    }*/
}