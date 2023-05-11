import db from "../firebase";
import { ref, get, remove, push, update } from "firebase/database";

const dbRef = ref(db, "/telephone");

const getAllProducts = () => {
  return get(dbRef);
};

const addProducts = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

const removeProducts = (key) => {
  const dbReftelephone = ref(db, `/telephone/${key}`);
  return remove(dbReftelephone);
};

const updateProducts = (key, updatedProducts) => {
  const dbReftelephone = ref(db, `/telephone/${key}`);
  return update(dbReftelephone,  updatedProducts);
};


export default {
  getAllProducts,
  addProducts,
  removeProducts,
  updateProducts
};