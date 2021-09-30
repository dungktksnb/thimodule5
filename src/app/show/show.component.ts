import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  books: Book[] = [];

  constructor(private  http :HttpClient) { }

  ngOnInit(): void {
    this.getbook()
  }
  getbook() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.books = data;
    })
  }

}
