import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="messagem" class="notification">
      <span>{{ messagem }}</span>
    </div>
  `,
  styleUrls: ['./notification.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class NotificationComponent implements OnInit {
  @Input() messagem: string | null = null;

  ngOnInit() {
    this.messagem = localStorage.getItem('loginMessage');

    if (this.messagem) {
      setTimeout(() => {
        this.closeNotification();
      }, 3000); 
    }
  }

  closeNotification() {
    this.messagem = null; 
    localStorage.removeItem('loginMessage'); 
  }
}
