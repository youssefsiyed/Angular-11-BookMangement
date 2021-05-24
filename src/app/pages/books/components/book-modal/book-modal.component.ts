import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { Book } from 'src/app/shared/models/book';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss']
})
export class BookModalComponent implements OnInit {

  @Input() book: Book = new Book;
  @Output() closeBookModal = new EventEmitter<boolean>();

  author = new Author();
  showBookModal: boolean = false;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getAuthorById();
  }

  onClickCloseBookModal(){
    this.closeBookModal.emit(this.showBookModal);
    console.log(this.showBookModal);
  }

  getAuthorById(){
   return this.api.getAuthorsById(this.book?.authorId).subscribe(
    (res) => {
      this.author = res;
    },
    (error) => console.log('ERROR: ' + error)
  );
  }
}
