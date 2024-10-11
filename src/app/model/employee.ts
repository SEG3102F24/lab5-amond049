export class Employee {
  constructor(
    public name: string,
    public dateOfBirth: Date,
    public city: string,
    public salary: number,
    public gender?: string,
    public email?: string,
  ) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.salary = salary;
    this.gender = gender;
    this.email = email;
  }
}
