import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = false;
    propertyBinding = 'this is property binding';
    serverCreationStatus = 'No Server was Created';
    serverCreated = false;
    serverName = '';
    servers = ['TestServer', 'TestServer2'];

    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
        
    }
    
    ngOnInit() {
       
    }

    onCreateServer() {
      this.serverCreationStatus = "Server was created. Server Name is " + this.serverName + ".";
      this.serverCreated = true;
      this.servers.push(this.serverName);
    }

    onUpdateServerName(event: any){
      this.serverName = (<HTMLInputElement>event.target).value;
    }
}
