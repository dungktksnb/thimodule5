import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bookForm!: FormGroup;

  constructor( private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl(""),
      author: new FormControl(""),
      description: new FormControl(""),
    })
  }

  createBook() {
    this.http.post<Book>('http://localhost:3000/books', this.bookForm.value).subscribe((data) => {
      alert("create thành công - " + data.title)
      this.router.navigate([""])
    })

  }

}
