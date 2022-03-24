import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HeaderData } from "./header-data.model";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  
  private _headerData = new BehaviorSubject<HeaderData>({ //BehaviorSubject vai detectar sempre que ouver mudancas nos valores internos 
    title: "Inicio",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
