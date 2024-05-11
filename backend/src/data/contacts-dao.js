// import { v4 as uuid } from "uuid";

import { Contact } from "./schema.js";

/**
 * Retrieves all contacts from the database.
 *
 * @returns a list of contacts
 */
export async function retrieveContacts() {
  return await Contact.find({}); // finds all because empty {} matches all contacts
}

/**
 * Creates a new contact.
 *
 * @param contact the contact to create. Must have a name. optionally a phoneNumber and funFact.
 * @returns the newly created contact, including a uniquely generated _id value.
 * @throws error if the contact has no name, or a non-unique name.
 */
export async function createContact(contact) {
  // if (!contact?.name) throw "New contacts must have a name.";

  // const existingContact = contacts.find((c) => c.name === contact.name);
  // if (existingContact) throw `The name '${contact.name}' is already taken.`;

  const dbContact = new Contact(contact);
  await dbContact.save();

  // const dbContact = { _id: uuid(), ...contact };
  // contacts.push(dbContact);
  return dbContact;
}

/**
 * Updates the contact with the given _id.
 * @param id the id to search
 * @param contact the update info
 * @returns true if a contact was updated, false otherwise.
 * @throws error if trying to update the contact's name to another name that's already taken.
 */
export async function updateContact(id, contact) {
  
  const c = await Contact.findByIdAndUpdate(id, contact);

  return !!c; // if c is an object, returns true. if null, then false.

}

/**
 * Deletes the contact with the given id, if any.
 *
 * @param id the id to search
 */
export async function deleteContact(id) {
  await Contact.deleteOne({ _id: id });
}
