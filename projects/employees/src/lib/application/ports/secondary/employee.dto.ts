import { DepartmentDTO } from "./department.dto";

export interface EmployeeDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly bio: string;
  readonly department: DepartmentDTO;
}
