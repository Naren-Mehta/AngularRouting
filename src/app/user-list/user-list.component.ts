import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  employeeList =[
    {id:1, name:"Suresh",domain:"DB", project:"WM"},
    {id:2, name:"Ramesh",domain:"UI", project:"WM"},
    {id:3, name:"Ganesh",domain:"Angular", project:"MR"},
    {id:4, name:"Mahesh",domain:"Node", project:"SAP"},
    {id:5, name:"Yogesh",domain:"Java", project:"Amway"},
    {id:6, name:"Naresh",domain:"Admin", project:"RMG"},
    {id:7, name:"Mogesh",domain:"IT", project:"RMZ"},
    {id:8, name:"Lokesh",domain:"HR", project:"RMZ"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
