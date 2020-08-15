export class BusinessRegister {
  Email: string;
  Password: String;
  ConfirmPassword: string;
  FirstName: string;
  LastName: string;
  BusinessName: string;
  BusinessLicense: number;
  AgreeToTerm: boolean;
  ClientCaptcha: string;
}

export class ClientRegister {
  Email: string;
  Password: String;
  ConfirmPassword: string;
  FirstName: string;
  LastName: string;
  AgreeToTerm: boolean;
  ClientCaptcha: string;
}

export class DealarRegister {
  Email: string;
  Password: String;
  ConfirmPassword: string;
  FirstName: string;
  LastName: string;
  BusinessName: string;
  BusinessLicense: number;
  AgreeToTerm: boolean;
  ClientCaptcha: string;
}

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
