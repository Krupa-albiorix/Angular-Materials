import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;

  onChange($event: any) {
    console.log($event);
  }
  
  color = 2;
  colors = [
    { id : 1, name : 'Red' },
    { id : 2, name : 'Green' },
    { id : 3, name : 'Blue' },
  ]

  minDate = new Date(2021, 1, 1);
  maxDate = new Date(2022, 10, 22);

  categories = [
    { data : 'Beginner' },
    { data : 'Intermediate' },
    { data : 'Advanced' },
  ];

  // progress = 0;
  // timer;

  // constructor() {
  //   this.timer = setInterval(() => {
  //     this.progress++;
  //     if (this.progress == 100) clearInterval(this.timer);
  //   }, 20);
  // }

  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId : 1 }
    })
    .afterClosed()
    .subscribe(result => console.log(result));
  }

}
