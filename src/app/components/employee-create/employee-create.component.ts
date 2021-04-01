import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee = {
    employee_name: "",
    employee_salary: "",
    employee_age: "",
    profile_image: ""
  }

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createEmployee(): void {
    const data = {
      employee_name: this.employee.employee_name,
      employee_salary: this.employee.employee_salary,
      employee_age: this.employee.employee_age,
      profile_image: this.employee.profile_image
    }

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);

        }
      )
  }

  resetField(): void {
    this.employee = {
      employee_name: "",
      employee_salary: "",
      employee_age: "",
      profile_image: ""
    }
  }

}
