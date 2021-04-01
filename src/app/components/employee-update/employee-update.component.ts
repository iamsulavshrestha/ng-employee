import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee = null;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeDetail(this.route.snapshot.paramMap.get('id'));
    console.log(this.employee);
  }

  employeeDetail(id): void {
    this.employeeService.show(id)
      .subscribe(
        employee => {
          this.employee = employee.data;
          console.log(employee);
        },
        error => {
          console.log(error)
        }
      );
  }

  updateEmployee(): void {
    const data = {
      employee_name: this.employee.employee_name,
      employee_salary: this.employee.employee_salary,
      employee_age: this.employee.employee_age,
      employee_profile_image: this.employee.employee_profile_image,
    }

    this.employeeService.update(this.employee.id, this.employee)
      .subscribe(
        employee => {
          this.router.navigate(['/employees']);
        }
      );

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
