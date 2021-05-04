import { Component, OnInit } from '@angular/core';
import { AuthorModel } from 'src/Models/AuthorModel';
import { AuthorService } from 'src/services/author.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data : AuthorModel[] = []
  constructor(private service : AuthorService) { }



  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getAuthorsWithBooks().subscribe(res=>{
      this.data = res
    })
  }

}

