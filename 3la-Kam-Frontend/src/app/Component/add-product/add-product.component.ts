import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Model/iproduct';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSnackBarModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  newPrd: Iproduct = {} as Iproduct
  constructor(
    private proService: ProductsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {

  }

  addNewPrd() {
    this.proService.addProduct(this.newPrd).subscribe((prd) => {
      console.log(prd)
      this.snackBar.open('Product added successfully', 'Close', {
        duration: 3000,
      });
      this.router.navigateByUrl('/products')

    });
  }

}
