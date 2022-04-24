import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-ver-tareas-dialog',
  templateUrl: './ver-tareas-dialog.component.html',
  styleUrls: ['./ver-tareas-dialog.component.css']
})
export class VerTareasDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VerTareasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
