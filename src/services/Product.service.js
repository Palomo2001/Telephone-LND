import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/telephone");

const getAlltelephone = () => {
  return get(dbRef);
};

const addtelephone = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

const removetelephone = (key) => {
  const dbReftelephone = ref(db, `/telephone/${key}`);
  return remove(dbReftelephone);
};

export default {
  getAlltelephone,
  addtelephone,
  removetelephone,
};