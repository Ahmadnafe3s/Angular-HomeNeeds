import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ToastService {
    Toast = new Subject<{type : String , message : String , duration : number}>
}