import { Contact } from '../../entities/contact';
export interface ContactRepository {
    createContact(contact: Contact): Promise<boolean>;
    getContact(): Promise<Contact[]>;
}