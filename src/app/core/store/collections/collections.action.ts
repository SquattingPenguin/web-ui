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

import {Action} from '@ngrx/store';
import {QueryModel} from '../navigation/query.model';
import {AttributeModel, CollectionModel} from './collection.model';
import {PermissionModel, PermissionType} from '../permissions/permissions.model';

export enum CollectionsActionType {

  GET = '[Collections] Get',
  GET_SUCCESS = '[Collections] Get :: Success',
  GET_FAILURE = '[Collections] Get :: Failure',

  CREATE = '[Collections] Create',
  CREATE_SUCCESS = '[Collections] Create :: Success',
  CREATE_FAILURE = '[Collections] Create :: Failure',

  UPDATE = '[Collections] Update',
  UPDATE_SUCCESS = '[Collections] Update :: Success',
  UPDATE_FAILURE = '[Collections] Update :: Failure',

  DELETE = '[Collections] Delete',
  DELETE_SUCCESS = '[Collections] Delete :: Success',
  DELETE_FAILURE = '[Collections] Delete :: Failure',

  CHANGE_ATTRIBUTE = '[Collections] Change Attribute',
  CHANGE_ATTRIBUTE_SUCCESS = '[Collections] Change Attribute :: Success',
  CHANGE_ATTRIBUTE_FAILURE = '[Collections] Change Attribute :: Failure',

  REMOVE_ATTRIBUTE = '[Collections] Remove Attribute',
  REMOVE_ATTRIBUTE_SUCCESS = '[Collections] Remove Attribute :: Success',
  REMOVE_ATTRIBUTE_FAILURE = '[Collections] Remove Attribute :: Failure',

  CHANGE_PERMISSION = '[Collections] Change Permission',
  CHANGE_PERMISSION_SUCCESS = '[Collections] Change Permission :: Success',
  CHANGE_PERMISSION_FAILURE = '[Collections] Change Permission :: Failure',

  REMOVE_PERMISSION = '[Collections] Remove Permission',
  REMOVE_PERMISSION_SUCCESS = '[Collections] Remove Permission :: Success',
  REMOVE_PERMISSION_FAILURE = '[Collections] Remove Permission :: Failure',

}

export namespace CollectionsAction {

  export class Get implements Action {
    public readonly type = CollectionsActionType.GET;

    public constructor(public payload: {query: QueryModel}) {
    }
  }

  export class GetSuccess implements Action {
    public readonly type = CollectionsActionType.GET_SUCCESS;

    public constructor(public payload: {collections: CollectionModel[]}) {
    }
  }

  export class GetFailure implements Action {
    public readonly type = CollectionsActionType.GET_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class Create implements Action {
    public readonly type = CollectionsActionType.CREATE;

    public constructor(public payload: { collection: CollectionModel }) {
    }
  }

  export class CreateSuccess implements Action {
    public readonly type = CollectionsActionType.CREATE_SUCCESS;

    public constructor(public payload: { collection: CollectionModel }) {
    }
  }

  export class CreateFailure implements Action {
    public readonly type = CollectionsActionType.CREATE_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class Update implements Action {
    public readonly type = CollectionsActionType.UPDATE;

    public constructor(public payload: { collection: CollectionModel }) {
    }
  }

  export class UpdateSuccess implements Action {
    public readonly type = CollectionsActionType.UPDATE_SUCCESS;

    public constructor(public payload: { collection: CollectionModel }) {
    }
  }

  export class UpdateFailure implements Action {
    public readonly type = CollectionsActionType.UPDATE_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class Delete implements Action {
    public readonly type = CollectionsActionType.DELETE;

    public constructor(public payload: { collectionCode: string }) {
    }
  }

  export class DeleteSuccess implements Action {
    public readonly type = CollectionsActionType.DELETE_SUCCESS;

    public constructor(public payload: { collectionCode: string }) {
    }
  }

  export class DeleteFailure implements Action {
    public readonly type = CollectionsActionType.DELETE_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class ChangeAttribute implements Action {
    public readonly type = CollectionsActionType.CHANGE_ATTRIBUTE;

    public constructor(public payload: { collectionCode: string, attributeId: string, attribute: AttributeModel }) {
    }
  }

  export class ChangeAttributeSuccess implements Action {
    public readonly type = CollectionsActionType.CHANGE_ATTRIBUTE_SUCCESS;

    public constructor(public payload: { collectionCode: string, attributeId: string, attribute: AttributeModel }) {
    }
  }

  export class ChangeAttributeFailure implements Action {
    public readonly type = CollectionsActionType.CHANGE_ATTRIBUTE_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class RemoveAttribute implements Action {
    public readonly type = CollectionsActionType.REMOVE_ATTRIBUTE;

    public constructor(public payload: { collectionCode: string, attributeId: string }) {
    }
  }

  export class RemoveAttributeSuccess implements Action {
    public readonly type = CollectionsActionType.REMOVE_ATTRIBUTE_SUCCESS;

    public constructor(public payload: { collectionCode: string, attributeId: string }) {
    }
  }

  export class RemoveAttributeFailure implements Action {
    public readonly type = CollectionsActionType.REMOVE_ATTRIBUTE_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class ChangePermission implements Action {
    public readonly type = CollectionsActionType.CHANGE_PERMISSION;

    public constructor(public payload: { collectionCode: string, type: PermissionType, permission: PermissionModel }) {
    }
  }

  export class ChangePermissionSuccess implements Action {
    public readonly type = CollectionsActionType.CHANGE_PERMISSION_SUCCESS;

    public constructor(public payload: { collectionCode: string, type: PermissionType, permission: PermissionModel }) {
    }
  }

  export class ChangePermissionFailure implements Action {
    public readonly type = CollectionsActionType.CHANGE_PERMISSION_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export class RemovePermission implements Action {
    public readonly type = CollectionsActionType.REMOVE_PERMISSION;

    public constructor(public payload: { collectionCode: string, type: PermissionType, name: string }) {
    }
  }

  export class RemovePermissionSuccess implements Action {
    public readonly type = CollectionsActionType.REMOVE_PERMISSION_SUCCESS;

    public constructor(public payload: { collectionCode: string, type: PermissionType, name: string }) {
    }
  }

  export class RemovePermissionFailure implements Action {
    public readonly type = CollectionsActionType.REMOVE_PERMISSION_FAILURE;

    public constructor(public payload: { error: any }) {
    }
  }

  export type All =
    Get | GetSuccess | GetFailure |
    Create | CreateSuccess | CreateFailure |
    Update | UpdateSuccess | UpdateFailure |
    Delete | DeleteSuccess | DeleteFailure |
    ChangeAttribute | ChangeAttributeSuccess | ChangeAttributeFailure |
    RemoveAttribute | RemoveAttributeSuccess | RemoveAttributeFailure |
    ChangePermission | ChangePermissionSuccess | ChangePermissionFailure |
    RemovePermission | RemovePermissionSuccess | RemovePermissionFailure;
}
