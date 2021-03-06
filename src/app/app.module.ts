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

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContextMenuModule} from 'ngx-contextmenu';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CollectionModule} from './collection/collection.module';
import {CoreModule} from './core/core.module';
import {DocumentsModule} from './documents/documents.module';
import {ViewModule} from './view/view.module';
import {WorkspaceModule} from './workspace/workspace.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContextMenuModule.forRoot({useBootstrap4: true}),
    CoreModule,
    CollectionModule,
    DocumentsModule,
    ViewModule,
    WorkspaceModule,
    AppRoutingModule // needs to stay last
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
