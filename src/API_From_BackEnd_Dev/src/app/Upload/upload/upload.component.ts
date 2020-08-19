import { Component, OnInit } from '@angular/core';
import {ProviderApiService } from '../Api.Services/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [ProviderApiService]
})

export class UploadComponent implements OnInit {
  imageUrl : string = "/assets/images/upload.png";
  fileToUpload : File = null;

  constructor(private imageService) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList) {
    this.fileToUpload = file.item(0);

    //show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Image){
    this.imageService.postFile(this.fileToUpload).subscribe(
      data => {
        console.log('done');
        Image.value = null;

      }
    )
  }

}
