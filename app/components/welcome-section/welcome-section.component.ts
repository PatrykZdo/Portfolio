import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent implements OnInit {

  title = 'my_portfolio';
  isScrolled: boolean = false;

  welcome_section_hi_text: string ="<Cześć>";
  welcome_section_hi_text_array: string[] = this.welcome_section_hi_text.split('');
  welcome_seciont_hi_is_ready: boolean = false;

  welcome_section_who_am_i_text: string="Jestem Patryk Zdobiński";
  welcome_section_who_am_i_array: string[] = this.welcome_section_who_am_i_text.split('');
  welcome_section_who_am_i_is_ready: boolean = false;

  welcome_section_what_i_do_text: string = "i to ja stworzyłem tą stronę";
  welcome_section_what_i_do_array: string[] = this.welcome_section_what_i_do_text.split('');
  welcome_section_what_i_do_is_ready: boolean = false;

  hiCurrentIndex: number = 0; 
  whoCurrentIndex: number = -1; 
  whatCurrentIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.startTypingHiSection();
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset >= 100; // Dostosuj wartość 100 na podstawie potrzeb
  }


  startTypingHiSection(){
    const interval = setInterval(() =>{
      if(this.hiCurrentIndex < this.welcome_section_hi_text.length){
        this.hiCurrentIndex++;
      }
      else{
        clearInterval(interval);
        this.welcome_seciont_hi_is_ready=true;
        setTimeout(()=>{
          this.startTypingWhoAmISection();
        },250);
      }
    },50);
  }

  startTypingWhoAmISection(){
    this.whoCurrentIndex=0;
      const newInterval = setInterval(() =>{
        if(this.whoCurrentIndex < this.welcome_section_who_am_i_text.length){
          this.whoCurrentIndex++;
        }
        else{
          clearInterval(newInterval);
          this.welcome_section_who_am_i_is_ready = true;
          this.startTypingWhatIDoSection();
        }
      },50);
  }


  startTypingWhatIDoSection(){
    this.whatCurrentIndex=0;
      const new2Interval = setInterval(() =>{
        if(this.whatCurrentIndex < this.welcome_section_what_i_do_text.length){
          this.whatCurrentIndex++;
        }
        else{
          clearInterval(new2Interval);
          this.welcome_section_what_i_do_is_ready = true;
        }
      },50);
  }

}
