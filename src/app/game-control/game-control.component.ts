import { Component, Output, EventEmitter } from '@angular/core';
// import { getNumberOfCurrencyDigits } from '@angular/common';
// import { EventEmitter } from 'events';

@Component({

    selector:'game-control',
    templateUrl:'./game-control.component.html',
    styleUrls:['./game-control.component.css']

})

export class GameControlComponent{

    number : number = 0;

    @Output() numberCreated = new EventEmitter<number>();
    timer:any;
    disableBtn:boolean=false;

    start(){
        this.disableBtn = true;
        this.timer = setInterval(() => {
            this.number += 1;
            this.numberCreated.emit(this.number)

        },1000);


    }

    stop(){
        this.disableBtn = false;
        clearInterval(this.timer);
        
    }
}