import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivateComponent {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivateGuard: CanDeactivateFn<DeactivateComponent> = (component: DeactivateComponent, route, state) => {
  return component.canDeactivate()
};
