import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';
@Injectable()

export class UserService{

    constructor(private counterService: CounterService){

    }
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    setToActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1); //remove this one element
        this.counterService.incrementInactiveToActive();
    }


    setToInactive(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1); //remove this one element
        this.counterService.incrementActiveToInactive();
    }

}
