let xRecord: Record<string, string | number | boolean | Function> = {
  name: "Aslam Khan",
};
//don't have problem with name (number) we use.
//Just doesn't accept number values as only string values are defined
//But the issues goes away as we add union of number and other types above
xRecord.number = 123;
xRecord.active = true;
xRecord.log = () => console.log("test");

//But the below assignment is reported as invalid whih is correct
//xRecord = 123;

interface Query {
  sort?: "asc" | "desc";
  matches(val): boolean;
}

//choose which properties you'd like to include in the Record of TheContact
//NOTE: Omit omitts the listed properties (e.g. address, status)
/*
type ContactQuery = Omit<
  Partial<Record<keyof TheContact, Query>>,
  "address" | "status"
>;*/

//Pick is the opposite of Ommit, and picks only the listed properties (e.g. id, name)
type ContactQuery = //Omit<
  Partial<Pick<Record<keyof TheContact, Query>, "id" | "name">>;
//>;

//REQUIRED QUERY TYPE
//Let's make the ContactQuery field required instead of optional
type RequiredContactQuery = Required<ContactQuery>;

function searchContacts(
  contacts: Contact[],
  //query: Record<keyof TheContact, Query>
  query: ContactQuery
) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      // get the query object for this property
      const propertyQuery = query[property];
      // check to see if it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts = searchContacts(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
    //phoneNumber: { matches: (name) => name === "Carol Weaver" },
  }
);
