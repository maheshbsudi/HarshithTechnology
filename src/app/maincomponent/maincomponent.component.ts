import { Component,ChangeDetectionStrategy, signal } from '@angular/core';
@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaincomponentComponent {
  readonly panelOpenState = signal(false);
  isContactTabActive = false;

  onTabChange(event: any) {
    // Check if the "CONTACT US" tab is selected
    this.isContactTabActive = event.index === 4; // Assuming "CONTACT US" is the 3rd tab (index 2)
  }
}
