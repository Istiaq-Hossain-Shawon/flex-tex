import { ITemplate } from "../RepositoryTemplate/ITemplate";



export class EmployeeTemplate implements ITemplate {
  get() {
    //here use DAO to get data 
    throw new Error("Method not implemented.");
  }
  Save(information: object) {
    //here use DAO to save data 
    throw new Error("Method not implemented.");
  }
  
}