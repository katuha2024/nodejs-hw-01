import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(' Усі контакти:', contacts);
  } catch (error) {
    console.error(' Помилка при зчитуванні контактів:', error.message);
  }
};

getAllContacts();
