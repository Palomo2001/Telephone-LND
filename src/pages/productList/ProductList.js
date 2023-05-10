import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import ProductService from "../../services/Product.service";
import "./ProductList.css";

function ProductList() {
  const [Products, setProducts] = useState([]);
  const refForm = useRef();

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((items) => {
        let allProducts = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allProducts.push({
            key: key,
            brand: data.brand,
            model: data.model
          });
        });
        setProducts([...allProducts]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeProduct = (key) => {
    ProductService.removeProduct(key).then((res) => {
      getAllProducts();
    });
  }

  const addProduct = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    ProductService.addProduct(brand, model).then((res) => {
      refForm.current.reset();
      setProducts(oldValues => [...oldValues, { key: res.key, brand, model }])
    })
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="Product-list-main-container">
        <div className="Product-form-container">
          <form id="Product-form" onSubmit={addProduct} ref={refForm}>
            <input className="rounded-input" type="text" name="brand" placeholder="brand"/>
            <input className="rounded-input" type="text" name="model" placeholder="model"/>
            <input className="rounded-input" type="submit" value="Add Product"/>
          </form>
        </div>

        <div className="Product-list">
          {Products.map(b =>
            <div className="Product-item" key={b.key}>
              <p>{b.brand} {b.model}</p>
              <FaRegTrashAlt className="delete-Product" onClick={() => removeProduct(b.key)}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;