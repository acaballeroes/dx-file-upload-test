import {Component} from '@angular/core';
import {FilesUploadedEvent, ProgressEvent, UploadErrorEvent, UploadStartedEvent, UploadedEvent} from 'devextreme/ui/file_uploader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onFileUploaded($event: FilesUploadedEvent) {
    console.log('onFileUploaded');
  }

  onUploadProgress($event: ProgressEvent) {
    console.log('onUploadProgress');
  }

  onUploadStarted($event: UploadStartedEvent) {
    console.log('onUploadStarted');
  }

  onUploadError($event: UploadErrorEvent) {
    console.log('onUploadError');
  }

}
