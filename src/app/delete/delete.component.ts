import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


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
    this.showDelete(this.bookForm.value.id)


  }

  showDelete(id: any) {
    this.http.delete<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookForm.get('id')?.setValue(data.id);
      this.bookForm.get('title')?.setValue(data.title);
      this.bookForm.get('author')?.setValue(data.author);
      this.bookForm.get('description')?.setValue(data.description);
    })
  }
  delete() {
    this.http.delete<Book>(`http://localhost:3000/books/${this.bookForm.value.id}`, this.bookForm.value).subscribe((data) => {
      alert("Update success ")
      this.router.navigate([""])
    })
  }


}
