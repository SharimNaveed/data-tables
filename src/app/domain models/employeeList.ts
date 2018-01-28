import { Customer } from './Customer';

let employee1 = new Customer();
employee1.id = 1;
employee1.firstName = 'Sharim';
employee1.lastName = 'Naveed';
employee1.emailId = 'sharim@gmail.com';
employee1.dateOfBirth = new Date();
employee1.dateOfJoining = new Date();
employee1.phoneNo = '8551927153';
employee1.gender = 'male';


let employee2 = new Customer();
employee2.id = 2;
employee2.firstName = 'Shadab';
employee2.lastName = 'Shamshi';
employee2.emailId = 'shadab@gmail.com';
employee2.dateOfBirth = new Date();
employee2.dateOfJoining = new Date();
employee2.phoneNo = '8551927153';
employee2.gender = 'male';

export let list = [employee1, employee2];
