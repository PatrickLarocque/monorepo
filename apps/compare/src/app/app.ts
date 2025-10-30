import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { utils } from '@rtt/utils';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  getMessage(): string {
    // Test change for affected detection
    return utils();
  }
}
