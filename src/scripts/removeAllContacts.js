import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    await writeContacts([]); // просто записуємо порожній масив
    console.log(' Всі контакти успішно видалено.');
  } catch (error) {
    console.error(' Помилка при видаленні контактів:', error.message);
  }
};

removeAllContacts();
