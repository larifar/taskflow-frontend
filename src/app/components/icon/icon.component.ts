import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  host:{
    '[class.disable]':'isDisable()'
  },
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() path: string = "../../../assets/svg/placeholder-img.svg"
  @Output() iconClick = new EventEmitter<void>();

  isDisable = input(false);
  isClicked = false;

  onClick(){
    this.iconClick.emit();
    this.isClicked = true;
    setTimeout(()=>{
      this.isClicked = false
    }, 300) ;
  }
}
