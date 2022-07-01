import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeneficiosFilter } from '../../interfaces/beneficios-filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  filterModel:BeneficiosFilter = {filter: "0", input: ""};
  @Output() filter = new EventEmitter<BeneficiosFilter>;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange() {
    this.filter.emit(this.filterModel);
  }

}
