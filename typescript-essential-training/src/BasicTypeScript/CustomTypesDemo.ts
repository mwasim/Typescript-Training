interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date; //make the field optional by using question mark
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
};
