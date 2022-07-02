export interface IUser {
  id: number,
  name: string,
  email: string,
  username: string,
  phone: string,
  website: string,
  company: ICompany,
  address: IAddress
}

interface ICompany {
  bs: string,
  catchPhrase: string,
  name: string
}

interface IAddress {
  city: string,
  street: string,
  suite: string,
  zipcode: string
  geo: {lat: string, lng: string}
}