type TheContactStatus = "active" | "inactive" | "new";

interface TheAddress {
  street: string;
  province: string;
  postalCode: string;
}

interface TheContact {
  id: number;
  name: string;
  status: TheContactStatus;
  address: TheAddress;
}

type AwesomeContact = TheContact["address"]["postalCode"];

interface TheContactEvent {
  contactId: TheContact["id"];
}

interface TheContactDeletedEvent extends TheContactEvent {}

interface TheContactStatusChangedEvent extends TheContactEvent {
  oldStatus: TheContact["status"];
  newStatus: TheContact["status"];
}

interface TheContactEvents {
  deleted: TheContactDeletedEvent;
  statusChanged: TheContactStatusChangedEvent;
  // ... and so on
}

function geTheValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

function handleEvent<T extends keyof TheContactEvents>(
  eventName: T,
  handler: (evt: TheContactEvents[T]) => void
) {
  if (eventName == "statusChanged") {
    handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" });
  }
}

handleEvent("statusChanged", (evt) => evt.contactId);
