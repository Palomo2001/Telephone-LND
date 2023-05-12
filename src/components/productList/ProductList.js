import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt,FaRegEdit } from 'react-icons/fa';
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

  const removeProducts = (key) => {
    ProductService.removeProducts(key).then((res) => {
      getAllProducts();
    });
  }

  const addProducts = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    ProductService.addProducts(brand, model).then((res) => {
      refForm.current.reset();
      setProducts(oldValues => [...oldValues, { key: res.key, brand, model }])
    })
  }

  const updateProducts = (key, updatedProduct) => {
    ProductService.updateProducts(key, updatedProduct).then((res) => {
      getAllProducts();
    });
  };
  

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="Product-list-main-container">
        <div className="Product-form-container">
          <form id="Product-form" onSubmit={addProducts} ref={refForm}>
            <input className="rounded-input" type="text" name="brand" placeholder="brand"/>
            <input className="rounded-input" type="text" name="model" placeholder="model"/>
            <input className="rounded-input" type="submit" value="Add Product"/>
          </form>
        </div>

        <div className="Product-list">
  {Products.map(b =>
    <div className="Product-item" key={b.key}>
      <input type="text" defaultValue={b.brand} onChange={(e) => b.brand = e.target.value} />
      <input type="text" defaultValue={b.model} onChange={(e) => b.model = e.target.value} />
      <FaRegEdit className="update-Product" onClick={() => updateProducts(b.key, b)}/>
      <FaRegTrashAlt className="delete-Product" onClick={() => removeProducts(b.key)}/>
    </div>
  )}
</div>

      </div>
    </>
  );
}

export default ProductList;