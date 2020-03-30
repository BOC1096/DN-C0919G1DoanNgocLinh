import { Customer } from "./customer";
import { Computer } from "./computer";
import { Time } from "@angular/common";

export class UseComputer {
    customer: Customer;
    computer: Computer;
    address: string;
    dateStart: Date;
    timeStart: Time;
    timeUse: any;
    constructor(){}
}