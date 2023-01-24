export class CounterService{
  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive ', this.activeToInactiveCounter)
  }

  incrementInactiveToActive(){
    this.inactiveToactiveCounter++;
    console.log('Inactive to Active', this.inactiveToactiveCounter)
  }
}
