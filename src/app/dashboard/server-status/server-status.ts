import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
    currentStatus: 'online' | 'offline' | 'unknown'= 'online';
    private destroyRef = inject(DestroyRef);

    constructor() {}

    ngOnInit() {
      const timerId = setInterval(() => {
        const randomValue = Math.random();
        if (randomValue < 0.4) {
          this.currentStatus = 'online';
        } else if (randomValue < 0.8) {
          this.currentStatus = 'offline';
        } else {
          this.currentStatus = 'unknown';
        }
      }, 5000);

      this.destroyRef.onDestroy(() => {
        // Cleanup logic if needed
        clearInterval(timerId);
      });
    }

    
}
