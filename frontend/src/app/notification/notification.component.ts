import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="messagem" class="notification">
      <span>{{ messagem }}</span>
      <button class="close-btn" (click)="closeNotification()">Fechar</button>
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
  }

  closeNotification() {
    this.messagem = null; 
    localStorage.removeItem('loginMessage'); 
  }
}
