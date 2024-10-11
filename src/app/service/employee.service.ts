import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Firestore, collectionData, collection, addDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore)
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);
  employees = [];

  /*
  get $(): Observable<readonly Employee[]> {
    // This is some code that already exists
    return this.employees$;
  }
   */

  getEmployees(): Observable<Employee[]>{
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees) as Observable<Employee[]>
  }

  addEmployee(employee: Employee) {
    const employees = collection(this.firestore, 'employees');
    return addDoc(employees, {...employee});
    // This is the code that already exists
    /*
    this.employees$.next([...this.employees$.getValue(), employee]);
    return true;

     */
  }
}
