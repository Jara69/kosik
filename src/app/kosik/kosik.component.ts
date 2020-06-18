import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/Product.model';
import {CategoriesService} from '../services/categories.service';
import {Category} from '../models/Category.model';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-kosik',
  templateUrl: './kosik.component.html',
  styleUrls: ['./kosik.component.scss']
})
export class KosikComponent implements OnInit {

  public arr = [];


  constructor(private activatedRoute: ActivatedRoute, private products: CategoriesService) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProductInfo(i.id).subscribe((data: Product) => {
        console.log(data);
        this.arr.push(data);
        localStorage.setItem('product', JSON.stringify(this.arr));
        const jsonProduct = localStorage.getItem('product');
        this.arr = JSON.parse(jsonProduct);
      });
    });
    const jsonProduct2 = localStorage.getItem('product');
    this.arr = JSON.parse(jsonProduct2);
  }

}
