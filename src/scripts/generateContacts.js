import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (amount = 5) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: amount }, () => createFakeContact());
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(` Успішно додано ${amount} контактів`);
  } catch (error) {
    console.error(" Помилка при генерації контактів:", error.message);
  }
};

generateContacts();
