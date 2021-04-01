import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  message: string;
  employees: any;
  currentEmployee: null;
  currentIndex = -1;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.paramMap.get('message');
    this.listEmployees();
  }

  listEmployees(): void {
    this.employeeService.list()
      .subscribe(
        employees => {
          this.employees = employees.data;
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
