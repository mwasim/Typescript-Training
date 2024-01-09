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
