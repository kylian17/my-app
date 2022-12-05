import { Component, Injector } from '@angular/core';
import { ConfigService } from './config/config.service';
import { entryDto } from './config/entryDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  topApps:entryDto[] = []; 
  images: string[] = [];

  constructor(public injector: Injector, private configService: ConfigService){

  }

  ngOnInit(){
    this.configService.getConfig()
    .subscribe((res) => {
      if(res.feed.entry != undefined ){
        this.topApps = res.feed.entry;
      }
    });
  }

  ngAfterViewChecked(){
    this.topApps.forEach(element => {
      if(element){
        if(element['im:image'])
        this.images.push(element?.['im:image'][0].label == undefined? "image":element?.['im:image'][0].label);
      }
    })
  }
}
