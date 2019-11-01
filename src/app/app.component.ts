import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolbarOptions: ToolbarItems[];
  ngOnInit(): void {
      this.data = sampleData;
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
      this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
}
