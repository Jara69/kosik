import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/Product.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Host from '../Host';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-kosik',
  templateUrl: './kosik.component.html',
  styleUrls: ['./kosik.component.scss']
})
export class KosikComponent implements OnInit {

  public arr = [];
  public finalPrice: number;

  constructor(private activatedRoute: ActivatedRoute, private products: ProductsService, private router: Router, public http: HttpClient) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProduct(i.id).subscribe((data: Product) => {
        this.arr.push(data);
        localStorage.setItem('product', JSON.stringify(this.arr));
        const jsonProduct = localStorage.getItem('product');
        this.arr = JSON.parse(jsonProduct);

      });
    });
    const jsonProduct2 = localStorage.getItem('product');
    this.arr = JSON.parse(jsonProduct2);
    const result = this.arr.map(res => res.price).reduce((acc, ele) => acc + ele, 0);
    this.finalPrice = result;

  }

  getProduct(id: number) {
    const headers = new HttpHeaders().set('access-token', Host.token);

    return this.http.get<Product>('/api/products/' + id, {headers});
  }

  deleteProduct(id: number) {
    const headers = new HttpHeaders().set('access-token', Host.token);

    return this.http.delete('/api/products/' + id, {headers});
  }
}
