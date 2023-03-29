import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  applications: any[] = [
    {
      id:1,
      name:'aaa'
    },
    {
      id:1,
      name:'aaa'
    },
    {
      id:2,
      name:'aaa'
    },
    {
      id:3,
      name:'aaa'
    },
  ];
  addNewAppModal = 0;
  viewAppModal = 0;
  editAppModal = 0;
  currApp: any = {};
  constructor(private _adminService: AdminService) {

  }
  ngOnInit() {
    this._adminService.getApplicationList().subscribe(res => {
      console.log('res :', res);
      this.applications = res;
    })
  }
  openModal(modalName: String, app?: any) {
    switch (modalName) {
      case 'add':
        this.addNewAppModal = 1;
        this.viewAppModal = 0;
        this.editAppModal = 0;
        break;
      case 'view':
        this.currApp = app;
        this.addNewAppModal = 0;
        this.viewAppModal = 1;
        this.editAppModal = 0;
        break;
      case 'edit':
        this.currApp = app;
        this.addNewAppModal = 0;
        this.viewAppModal = 0;
        this.editAppModal = 1;
        break;
      default:
        this.addNewAppModal = 0;
        this.viewAppModal = 0;
        this.editAppModal = 0;
        break;
    }
  }
  updateApp(id: any, name: any) {
    console.log("id: ", id, "name: ", name);
  }
  addNewApp(name: String) {
    console.log('name :', name);

  }
}
