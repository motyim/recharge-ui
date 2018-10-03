import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
import {SessionService} from '../../service/session.service';
import {AmanResponse} from '../../interface/AmanResponse';


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})


export class TransfersComponent implements OnInit {
  TerminalID: number;
  URL: string;
  fileChooser: string;
  public uploader: FileUploader;
  uploadError: boolean;
  uploadSuccess: boolean;

  constructor(private session: SessionService) {
    this.URL = 'http://10.140.173.16:15732/bulktransfer';
    this.fileChooser = 'Select Deposits Datasheet';
    this.TerminalID = 80006;
    this.uploader = new FileUploader({url: this.URL, itemAlias: 'file', queueLimit: 1});
    this.uploadError = false;
    this.uploadSuccess = false;
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      switch (status) {
        case 500:
          this.uploadError = true;
          this.uploadSuccess = false;
          break;
        case 200:
          this.uploadSuccess = true;
          this.uploadError = false;
          this.session.setSessionId((<AmanResponse>JSON.parse(response)).data.uuid);
          break;
      }
    };
  }

  upload() {
    this.uploader.uploadAll();
  }
}
