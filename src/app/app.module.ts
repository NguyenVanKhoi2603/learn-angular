import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';

import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip/ip.component';
@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ChildComponent,
    ParentComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
