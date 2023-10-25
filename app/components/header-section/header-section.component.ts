import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  constructor( private scrollService: ScrollServiceService) { }

  @HostListener('window:scroll')
  onWindowScroll():void{
    this.scrollService.handleScroll();
  }

  ngOnInit(): void {
  }

}
