//define type using type alias
type ContactName = string;
type ContactBirthDate = Date | number | string; //Use the pipe symbol for union types
type AddressableContact = Contact & Address; //combines two types together (same as Contact extends Address)
//enum (ContactStatus) can be written as type alias as below
type ContactStatusUsingTypeAlias = "active" | "inactive" | "new";

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
  birthDate?: ContactBirthDate; //make the field optional by using question mark
  status: ContactStatus;
  status_typealias: ContactStatusUsingTypeAlias;

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
  status_typealias: "active", //typing string restricts the values
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

//function to operate on union types field (dateOfBirth)
function getBirthDate(contact: Contact): Date | number {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

/*
  Using keyof operator (looks a lot like instanceof operator)
*/
type ContactFields = keyof Contact;
const field: ContactFields = "name"; //restricts to the names of the fields in Contact interface

//using keyof operator here limits the value of the propertyName
function getValue(source, propertyName: keyof Contact) {
  return source[propertyName];
}

//can be rewritten as generic method
function getValue_generic<T>(source: T, propertyName: keyof T) {
  return source[propertyName];
}

//keyof operator is a great way to constraint generic types too
function getValue_generic_constraints<T, U extends keyof T>(
  source: T,
  propertyName: U
) {
  return source[propertyName];
}

const contactName = getValue(primaryContact, "name"); //keyof operator on this method ensures valid propertyName is used
const contactNameGeneric = getValue_generic(primaryContact, "name");
const minMaxValue = getValue_generic({ min: 1, max: 20 }, "min");
