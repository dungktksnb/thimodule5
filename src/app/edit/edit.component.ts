import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {ActivatedRoute, Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  bookForm!: FormGroup;


  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }


  ngOnInit(){
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    })
    this.activeRoute.params.subscribe((data) => this.bookForm.value.id = data.id);
    this.showEdit(this.bookForm.value.id)


  }

  showEdit(id: any) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookForm.get('id')?.setValue(data.id);
      this.bookForm.get('title')?.setValue(data.title);
      this.bookForm.get('author')?.setValue(data.author);
      this.bookForm.get('description')?.setValue(data.description);
    })
  }
  updateBooks() {
    this.http.put<Book>(`http://localhost:3000/books/${this.bookForm.value.id}`, this.bookForm.value).subscribe((data) => {
      alert("Update success ")
      this.router.navigate([""])
    })
  }

}
