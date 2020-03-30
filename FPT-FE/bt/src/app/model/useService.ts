import { Time } from "@angular/common";
import { Service } from "./service";
import { Customer } from "./customer";

export class UseService {
    service: Service;
    customer: Customer;
    dateUsed: Date;
    timeUsed: Time;
    amount: number;
    constructor(){}
}