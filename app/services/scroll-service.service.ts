import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  private prevScrollPos = window.pageYOffset;

  constructor() { }

  public handleScroll(): void{
    const currentScrollPos = window.pageYOffset;
    const header = document.getElementById('header')!;

    if(this.prevScrollPos > currentScrollPos){
      header.classList.add('active');
    }
    else{
      header.classList.remove('active');
    }
    this.prevScrollPos = currentScrollPos;
  }
}
