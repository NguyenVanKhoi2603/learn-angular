import { Component, OnInit } from '@angular/core';

@Component({
    // chứa các đoạn mã HTML
    templateUrl: './word.component.html',
    // Thẻ để gọi component
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})
// xuất để các nơi khác có thể sử dụng
export class WordComponent {
    en: string = 'Hello';
    vn: string = 'Xin chao!';
    imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    forgot = false;

    toggleForgot() {
        alert("Hello User");
        this.forgot = !this.forgot;
    }
}


