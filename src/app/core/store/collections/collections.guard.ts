/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {tap, filter, take, switchMap, catchError} from 'rxjs/operators';
import {AppState} from '../app.state';
import {selectCollectionsLoaded} from './collections.state';
import {CollectionsAction} from './collections.action';

@Injectable()
export class CollectionsGuard implements CanActivate {

  constructor(private store: Store<AppState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(selectCollectionsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new CollectionsAction.Get({query: {}}));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
