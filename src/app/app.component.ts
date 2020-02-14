import { Component, ChangeDetectionStrategy, VERSION } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  version = VERSION.full;

  constructor(
    private toastService: ToastService, // create an instance of the service that intercepts $entities actions
  ) {}
}
