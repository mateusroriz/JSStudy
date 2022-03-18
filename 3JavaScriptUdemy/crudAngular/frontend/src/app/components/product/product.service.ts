import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

//@injectable esta dizendo q ela pode ser injetada em outras classes / eh singleton por ser injetado a partir do root
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
