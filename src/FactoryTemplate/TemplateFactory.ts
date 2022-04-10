import { CompanyTemplate } from "./CompanyTemplate";
import { EmployeeTemplate } from "./EmployeeTemplate";
import { ITemplate } from "./ITemplate";

export default class TemplateFactory {
    static getTemplate(template: string): ITemplate {
        if (template == 'employee') {
            return new EmployeeTemplate();
        }
        if (template == 'company') {
            return new CompanyTemplate();
        }
        else {
            return new CompanyTemplate();
        }
    }
}