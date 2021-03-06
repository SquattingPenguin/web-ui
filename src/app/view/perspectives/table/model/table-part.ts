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

import {TableRow} from './table-row';
import {Collection} from '../../../../core/dto/collection';
import {Attribute} from '../../../../core/dto/attribute';
import {LinkType} from '../../../../core/dto/link-type';
import {Document} from '../../../../core/dto/document';

export class TablePart {

  index: number;
  nextPart: TablePart;

  collection: Collection;
  shownAttributes: Attribute[] = [];
  hiddenAttributes: Attribute[] = [];

  expandedDocuments: Document[] = [];

  linkType: LinkType;
  linkedCollection: Collection;

  rows: TableRow[] = [];
  sorting: {attributeId: string, descending: boolean}

}
