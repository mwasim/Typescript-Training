//define type using type alias
type ContactName = string;

//enum helps avoid bugs - for example, here using Active/InActive as string values could cause bugs as string may change
enum ContactStatus {
  //by default enum values start with index 0 (number), but we may assign string values to it
  Active = "active",
  InActive = "inactive",
  New = "new",
}

interface Contact extends Address {
  id: number;
  name: ContactName; //using type alias ContactName makes more sense here
  birthDate?: Date; //make the field optional by using question mark
  status: ContactStatus;

  //define a method on an interface
  //clone(name: string): Contact;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

let primaryContact: Contact = {
  //birthDate: new Date("01/01/2023"),
  name: "Aslam",
  id: 1,
  line1: "123 ABC Block",
  line2: "Green Society",
  province: "Punjab",
  region: "Lahore",
  postalCode: "54000",
  status: ContactStatus.Active,
};

//typing functions demo
function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

//Generic implementation of the clone function
//Here T2 extends T1, but doesn't literally need to extend for example,
//we've used UserContact as an example (It just shares same properties)
function clone_generic<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

interface UserContact /*<TExternalId>*/ extends Address {
  id: number;
  name: ContactName; //using type alias ContactName makes more sense here
  birthDate?: Date; //make the field optional by using question mark
  status: ContactStatus;
  birthPlace: string;
  //externalId: TExternalId; //Generics can be applied to classes too
}

let pContactClone = clone(primaryContact);
let pContactClone2 = clone_generic<Contact, UserContact>(primaryContact);

//clone_generic usage demo
let dateRange = { startDate: Date.now(), endDate: Date.now() };
let dateRangeClone = clone_generic(dateRange);
