import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error(' Помилка при підрахунку контактів:', error.message);
    return 0;
  }
};

const run = async () => {
  const count = await countContacts();
  console.log(` Кількість контактів: ${count}`);
};

run();
