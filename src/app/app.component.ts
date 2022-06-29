import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  columnDefs = [
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price', filter: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  onFirstDataRendered(params): void {
    const filterModel = localStorage.getItem('ag-grid-persistane-filtering');
    console.log(filterModel);
    params.api.setFilterModel(JSON.parse(filterModel));
    params.api.sizeColumnsToFit();
  }

  onFilterChanged(params) {
    localStorage.setItem(
      'ag-grid-persistane-filtering',
      JSON.stringify(params.api.getFilterModel())
    );
  }
}
