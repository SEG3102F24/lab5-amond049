import {Component, inject, OnInit} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import {Employee} from "../model/employee";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit{
  emps: Employee[] = [];
  protected employees: EmployeeService = inject(EmployeeService);
  ngOnInit(): void {
    this.employees.getEmployees().subscribe(data => {
      this.emps = data.map(e => {
        // Converting the timestamp back into the date so that it can be formatted via pipe in the template
        let timestamp = e.dateOfBirth.toString().substring(18, 28);
        // Modifying the date a little bit because the date is stored in UTC-4 in Firebase
        let timeStampNumber = (Number(timestamp) + 3600 * 4) * 1000;
        let date = new Date(timeStampNumber);
        e.dateOfBirth = date;
        return {...e} as Employee;
      });
    });

    console.log(this.emps)
  }
}
