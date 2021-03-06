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

import {COLLECTION_NO_CODE, COLLECTION_NO_COLOR, COLLECTION_NO_ICON} from 'app/collection/constants';
import {CollectionService} from '../../core/rest/collection.service';
import {Collection} from '../../core/dto/collection';
import {Observable} from 'rxjs/Observable';
import {map, tap} from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Injectable()
export class CollectionSelectService {

  private selection: Collection = {
    code: COLLECTION_NO_CODE,
    icon: COLLECTION_NO_ICON,
    color: COLLECTION_NO_COLOR,
    description: 'Description',
    name: '',
    attributes: []
  };

  constructor(private collectionService: CollectionService) {
  }

  public select(collectionCode: string): Observable<Collection> {
    return this.collectionService.getCollection(collectionCode).pipe(
      tap(collection => this.copyCollection(collection, this.selection)),
      map(collection => this.selection)
    );
  }

  public selectCollection(collection: Collection): Observable<Collection> {
    this.copyCollection(collection, this.selection);
    return Observable.of(this.selection);
  }

  public getSelected(): Collection {
    return this.selection;
  }

  private copyCollection(collectionFrom: Collection, collectionTo: Collection): void {
    Object.entries(collectionFrom).forEach(([key, value]) => {
      collectionTo[key] = value;
    });
  }

}
