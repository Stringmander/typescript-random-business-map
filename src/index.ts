import * as process from 'process';
import { User } from './User';
import { Company } from './Company';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

console.log(process.env.API_KEY);
