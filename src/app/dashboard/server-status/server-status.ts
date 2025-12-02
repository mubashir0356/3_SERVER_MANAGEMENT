import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
    currentStatus = signal<'online' | 'offline' | 'unknown'>('online')
    private destroyRef = inject(DestroyRef);

    constructor() {}

    ngOnInit() {
      const timerId = setInterval(() => {
        const randomValue = Math.random();
        if (randomValue < 0.4) {
          this.currentStatus.set('online');
        } else if (randomValue < 0.8) {
          this.currentStatus.set('offline');
        } else {
          this.currentStatus.set('unknown');
        }
      }, 5000);

      this.destroyRef.onDestroy(() => {
        // Cleanup logic if needed
        clearInterval(timerId);
      });
    }


}
