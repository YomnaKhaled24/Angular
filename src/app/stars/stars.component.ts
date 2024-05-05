import { Component ,Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {

  @Input() rating : any = 0

  totalStars :any;
  filledStars :any;
  halfStar :any;

  // totalStars :any = 5;
  // filledStars = Math.floor(this.rating);
  // halfStar = this.rating % 1 !== 0;
  
  constructor(private sanitizer: DomSanitizer) 
  {
    console.log(this.rating)
    console.log(this.totalStars)
    console.log(this.filledStars)
    console.log(this.halfStar)

  }


  get stars(): SafeHtml[] {

    this.totalStars = 5;
    this.filledStars = Math.floor(this.rating);
    this.halfStar = this.rating % 1 !== 0;

    // console.log( Array.from({ length: this.totalStars }, (_, index) => this.renderStar(index)));
    return Array.from({ length: this.totalStars }, (_, index) => this.sanitizer.bypassSecurityTrustHtml(this.renderStar(index)))
  }
  
  
  
  renderStar(index: number): string {
      
    // console.log(this.rating)
    if (index < this.filledStars) {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`; // Filled star
    } else if (index === this.filledStars && this.halfStar) {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>`; // Half-filled star
    } else {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="yellow" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>`; // Empty star
    }

}
}
