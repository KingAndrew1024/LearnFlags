import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  cards = [
    { title: 'Banderas 1', image: '', link: 'flags/1' },
    { title: 'Banderas 2', image: '', link: 'flags/2' },
    { title: 'Banderas 3', image: '', link: 'flags/3' },
    { title: 'Banderas 4', image: '', link: 'flags/4' },
    { title: 'Banderas 5', image: '', link: 'flags/5' },
    { title: 'Banderas 6', image: '', link: 'flags/6' },
    { title: 'Banderas 7', image: '', link: 'flags/7' },
    { title: 'Capitales 1', image: '', link: 'capitals/1' },
    { title: 'Capitales 2', image: '', link: 'capitals/2' },
    { title: 'Capitales 3', image: '', link: 'capitals/3' },
    { title: 'Capitales 4', image: '', link: 'capitals/4' },
  ];

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
