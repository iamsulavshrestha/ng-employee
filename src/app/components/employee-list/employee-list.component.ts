import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  currentEmployee: null;
  currentIndex = -1;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  listEmployees(): void {
    this.employeeService.list()
      .subscribe(
        employees => {
          this.employees = employees;
          console.log(employees);
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee(id): void {
    this.employeeService.delete(id)
      .subscribe(
        error => {
          console.log(error)
        }
      )
  }

}
