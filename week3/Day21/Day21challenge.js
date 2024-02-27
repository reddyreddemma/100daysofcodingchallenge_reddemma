// Define the Contact class
class Contact {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  
    // Getter methods
    getName() {
      return this.name;
    }
  
    getEmail() {
      return this.email;
    }
  
    getPhone() {
      return this.phone;
    }
  }
  
  // Create a contact management system
  class ContactManager {
    constructor() {
      this.contacts = []; // Array to store contacts
    }
  
    // Add a new contact
    addContact(name, email, phone) {
      const newContact = new Contact(name, email, phone);
      this.contacts.push(newContact);
    }
  
    // Display all contacts
    viewContacts() {
      console.log("All Contacts:");
      this.contacts.forEach((contact, index) => {
        console.log(`${index + 1}. Name: ${contact.getName()}, Email: ${contact.getEmail()}, Phone: ${contact.getPhone()}`);
      });
    }
  
    // Search for a contact by name
    searchContactByName(name) {
      const foundContact = this.contacts.find(contact => contact.getName().toLowerCase() === name.toLowerCase());
      if (foundContact) {
        console.log(`Contact found: Name: ${foundContact.getName()}, Email: ${foundContact.getEmail()}, Phone: ${foundContact.getPhone()}`);
      } else {
        console.log(`Contact with name "${name}" not found.`);
      }
    }
  }
  
  // Example usage
  const myContactManager = new ContactManager();
  
  // Add some contacts
  myContactManager.addContact("John Doe", "john@example.com", "123-456-7890");
  myContactManager.addContact("Alice Smith", "alice@example.com", "987-654-3210");
  
  // View all contacts
  myContactManager.viewContacts();
  
  // Search for a contact by name
  myContactManager.searchContactByName("Alice Smith");
  myContactManager.searchContactByName("Bob Johnson");
  //output:All Contacts:
1. Name: John Doe, Email: john@example.com, Phone: 123-456-7890
2. Name: Alice Smith, Email: alice@example.com, Phone: 987-654-3210
Contact found: Name: Alice Smith, Email: alice@example.com, Phone: 987-654-3210
Contact with name "Bob Johnson" not found.
