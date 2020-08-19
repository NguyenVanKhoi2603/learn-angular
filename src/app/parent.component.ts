import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component'
@Component({
    selector: 'app-parent',
    template: `
       
        <button (click)="onAddForChild();">add For child</button>
        <app-child></app-child>
    `
})

export class ParentComponent {
    @ViewChild(ChildComponent)
    myChild: ChildComponent
    
    onAddForChild(){
        this.myChild.value++;
    }
}

