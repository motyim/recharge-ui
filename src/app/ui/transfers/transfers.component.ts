import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
import {SessionService} from '../../service/session.service';
import {environment} from '../../../environments/environment';
import {Acknowledge} from '../../interface/Acknowledge';
import {NGXLogger} from 'ngx-logger';


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})


export class TransfersComponent implements OnInit {
  TerminalID: string;
  URL: string;
  fileChooser: string;
  public uploader: FileUploader;
  uploadError: boolean;
  uploadSuccess: boolean;
  errorMessage: string;
  constructor(private session: SessionService ,  private logger: NGXLogger ) {
    this.URL = environment.baseUrl + 'bulktransfer';
    this.fileChooser = 'Select Deposits Datasheet';
    this.TerminalID = this.session.getUserTerminal();
    // @ts-ignore
    this.uploader = new FileUploader({url: this.URL, itemAlias: 'file', queueLimit: 1,  withCredentials : true});
    this.uploadError = false;
    this.uploadSuccess = false;
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = true;
    };
    // @ts-ignore
    this.uploader.onCompleteItem = (item: any, response: Acknowledge, status: any, headers: any) => {
      this.logger.info('FileUpload:uploaded:', item, status, response);
      switch (status) {
        case 500:
          this.uploadError = true;
          this.uploadSuccess = false;
          this.errorMessage = 'Error in server please try again later ';
          break;
        case 400:
          this.uploadError = true;
          this.uploadSuccess = false;
          // @ts-ignore
          this.errorMessage = (<Acknowledge> JSON.parse( response )).statusMessage;
          break;
        case 200:
          this.uploadSuccess = true;
          this.uploadError = false;
          // @ts-ignore
          this.session.setSessionId((<Acknowledge>JSON.parse(response)).data.uuid);
          break;
      }
    };
  }

  upload() {
    this.uploader.uploadAll();
  }
}
