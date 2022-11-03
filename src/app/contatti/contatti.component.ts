import { Component, OnInit } from '@angular/core';
import { Person } from '../class/person';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss'],
})
export class ContattiComponent implements OnInit {
  persons: Person[] = [];

  constructor() {}

  ngOnInit(): void {}
}
