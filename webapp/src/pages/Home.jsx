import React, { useState } from "react";
import { CATEGORIES } from "../constants";
import AddEditProductModal from "../components/AddEditProductModal";
import "./Home.css";
import Slider from "../components/Slider.jsx"
import Header from "../components/Header.jsx"
const Home = ({ products, addProduct, updateProduct, deleteProduct }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const filtered = products ?? [].filter((p) => {
    const matchCat = category === "all" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = () => {
    setEditProduct(null);    
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditProduct(product); 
    setShowModal(true);
  };

  const handleSave = (productData) => {
    if (editProduct) {
      updateProduct(productData);
    } else {
      addProduct(productData);
    }
    setShowModal(false);    
  };


  return (
    <div className="products-page">

        {/* <Slider />
        
      </div>
  
      <div className="products-header">
        <Slider />
        <h2 className="subject">Quản lý sản phẩm</h2>
        <button onClick={handleAdd} className="add-button">
          + Thêm sản phẩm
        </button>
      </div>  */}

      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Tìm sản phẩm..."
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "Tất cả" : c}
            </option>
          ))}
        </select>
      </div>


      <table className="product-table">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Loại sản phẩm</th>
            <th>Ngày thêm</th>
            <th>Ngày hết hạn</th>
            <th>Đơn vị</th>
            <th>Số lượng</th>
            <th>Ghi chú</th>
            <th>Ảnh</th>
            <th>Sửa / Xoá</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td>Thảo hehe</td>
              <td>Loại khác</td>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>bị hehe</td>
              <td></td>
            </tr>
          ) : (
            filtered.map((p) => (
              <tr key={p.id}>
                <td>{p.product_name}</td>
                <td>{p.category}</td>
                <td>{p.detected_at}</td>
                <td>{p.expiry_date}</td>
                <td>{p.unit}</td>
                <td>{p.quantity.toLocaleString()}</td>
                <td>{p.notes}</td>
                <td>
                  <img src={p.image_url} alt={p.name} width="50" height="50" />
                </td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(p)}>
                    Sửa
                  </button>
                  <button className="delete-btn" onClick={() => deleteProduct(p.id)}>
                    Xoá
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <AddEditProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={editProduct}
      />
    </div>
  );
};

export default Home;
