import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

buttonExchange: boolean = false;
seconds: number = 0;
outTimer: any;

  constructor( ) {
    this.StartTimer()
  }


  //timer
  StartTimer() {
    this.outTimer = setInterval(()=>{

      this.seconds = this.seconds + 1;
      console.log('Seconds', this.seconds)

      if(this.seconds > 7){
        this.buttonExchange = false;
        console.log('faster')
      }else{
        this.buttonExchange =true;
        console.log('slower')
      }

      if(this.seconds > 8){
        this.seconds = 0
      }

    },1000)

  }


}
