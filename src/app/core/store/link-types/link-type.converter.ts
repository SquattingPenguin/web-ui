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

import {LinkType} from '../../dto/link-type';
import {CollectionModel} from '../collections/collection.model';
import {LinkTypeModel} from './link-type.model';

export class LinkTypeConverter {

  public static fromDto(dto: LinkType, correlationId?: string): LinkTypeModel {
    return {
      id: dto.id,
      name: dto.name,
      collectionCodes: dto.collectionCodes,
      attributes: [], // TODO
      correlationId: correlationId
    };
  }

  public static toDto(model: LinkTypeModel): LinkType {
    return {
      id: model.id,
      name: model.name,
      collectionCodes: model.collectionCodes,
      attributes: [] // TODO
    };
  }

  public static addCollections(linkType: LinkTypeModel, collections: CollectionModel[]): LinkTypeModel {
    const usedCollections: [CollectionModel, CollectionModel] = [
      collections.find(collection => collection.code === linkType.collectionCodes[0]),
      collections.find(collection => collection.code === linkType.collectionCodes[1])
    ];
    return {...linkType, collections: usedCollections};
  }

}
