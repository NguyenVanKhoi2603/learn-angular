import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn = '';
  newVn = '';
  isShow = false;
  filterStatus = 'Display all'
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  addWord() {
    if ((this.newEn.length == 0) || (this.newVn.length == 0)) {
      alert("Please fill out the form!!")
    } else {
      this.arrWords.push({

        id: this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
      });
      this.newEn = '';
      this.newVn = '';
      this.isShow = false;
    }
  }

  deleteWord(id: number) {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean){
    const dkAll = this.filterStatus === 'Display all';
    const dkMemorized = this.filterStatus === 'Displays memorized' && memorized;
    const dkDontMemorized = this.filterStatus === 'Displays dont remember' && !memorized;
    return dkAll || dkMemorized || dkDontMemorized;
  }
  constructor() { }
  ngOnInit(): void {
  }


}


