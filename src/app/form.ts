export class Form {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Object,
    public framework: string,
    public frameworkVersion: string,
    public email: string,
    public hobby?: string,
    ) {}
}
