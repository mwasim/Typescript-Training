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

interface TheContactEvent {
  contactId: number;
}

interface TheContactDeletedEvent extends TheContactEvent {}

interface TheContactStatusChangedEvent extends TheContactEvent {
  oldStatus: TheContactStatus;
  newStatus: TheContactStatus;
}

interface TheContactEvents {
  deleted: TheContactDeletedEvent;
  statusChanged: TheContactStatusChangedEvent;
  // ... and so on
}

function geTheValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

