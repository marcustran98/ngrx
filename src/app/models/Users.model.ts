export class User {
  constructor(
    private email: string,
    public token: string,
    private localId: string,
    private exprirationDate: Date
  ) { }
}