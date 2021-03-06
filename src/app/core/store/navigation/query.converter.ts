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

import {Query} from '../../dto/query';
import {QueryModel} from './query.model';

export class QueryConverter {

  public static fromDto(dto: Query): QueryModel {
    return {
      collectionCodes: dto.collectionCodes,
      documentIds: dto.documentIds,
      filters: dto.filters,
      fulltext: dto.fulltext,
      linkTypeIds: dto.linkTypeIds,
      // TODO convert other fields as well
    };
  }

  public static toDto(model: QueryModel): Query {
    return {
      collectionCodes: model.collectionCodes,
      // documentIds: model.documentIds,
      filters: model.filters,
      fulltext: model.fulltext,
      // linkTypeIds: model.linkTypeIds,
      // TODO convert other fields as well
    };
  }

  public static toString(query: QueryModel): string {
    return JSON.stringify(query ? query : {}, (key, value) => {
      if (value instanceof Array && value.length === 0) {
        return undefined;
      }
      return value;
    });
  }

  public static fromString(stringQuery: string): QueryModel {
    const parsedQuery = stringQuery ? JSON.parse(stringQuery) : {};
    const query: QueryModel = parsedQuery ? parsedQuery : {};

    query.collectionCodes = query.collectionCodes || [];
    query.documentIds = query.documentIds || [];
    query.filters = query.filters || [];
    query.linkTypeIds = query.linkTypeIds || [];

    return query;
  }

}
