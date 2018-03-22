import { MessageService } from './../_services/message.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  

  serverElements : any = []
  constructor(private messageService: MessageService) {

    this.serverElements = [{
      type: 'server',
      serverName: 'dummy server',
      serverContent: 'dummy server content'
    }]
   }

  ngOnInit() {
  }
  addServer(event){
    this.serverElements.push(event);
  }
  addBluePrint(event){
    this.serverElements.push(event);
  }
  sendMsg(){
    this.messageService.getMessage('Hai, This is Message from the Body Component');
  }
  clearMsg(){
    this.messageService.clearMessage();
  }
}
