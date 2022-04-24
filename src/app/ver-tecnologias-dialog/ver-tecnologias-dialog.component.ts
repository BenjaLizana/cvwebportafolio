import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-ver-tecnologias-dialog',
  templateUrl: './ver-tecnologias-dialog.component.html',
  styleUrls: ['./ver-tecnologias-dialog.component.css']
})
export class VerTecnologiasDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VerTecnologiasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
