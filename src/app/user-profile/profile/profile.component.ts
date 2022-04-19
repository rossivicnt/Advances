import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { AcceptValidator, MaxSizeValidator } from '@angular-material-components/file-input';

const presetFiles = [new File([], "file 1"), new File([], "file 2")];
const presetFile = new File([], "file 1");

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public files:any;
  maxSize= 16;

  constructor() { 
  this.fileControl = new FormControl(this.files, [
      Validators.required,
      MaxSizeValidator(this.maxSize * 1024)
    ])
  }

  optionsFile = {
    value: false,
    multiple: false,
    accept: '.png, .jpg, .jpeg'
  };
  photoProfile: string = "../../../assets/images/woman-3083383_1920.jpg";
  fileControl: FormControl; 

  subirArchivo(archivo: any) {
    console.log(archivo);
  }

  fileEvent(fileEvent: any){
    console.log( fileEvent.target.files[0] );
  }

  ngOnInit(): void {
  }

}
