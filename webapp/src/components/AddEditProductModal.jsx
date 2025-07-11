import React, { useState, useEffect } from "react";
import "./AddEditProductModal.css";

const defaultForm = {
  id: 5,
  product_name: '',
  category: '',
  detected_at: '',
  expiry_date: '',
  unit: '',
  quantity: 0,
  notes: '',
  image_url: ''
};

const AddEditProductModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(defaultForm);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
    setForm(defaultForm);  
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="title">{initialData ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="productName">Tên sản phẩm</label>
            <input
              id="productName"
              name="productName"
              value={form.product_name}
              onChange={handleChange}
              required
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="productCategory">Loại sản phẩm</label>
            <select
              id="productCategory"
              name="productCategory"
              value={form.category}
              onChange={handleChange}
              >
              <option value="tuoiSong">Thực phẩm tươi sống</option>
              <option value="dongHop">Đồ đóng hộp</option>
              <option value="doUong">Đồ uống</option>
              <option value="doAnVat">Đồ ăn vặt</option>
              <option value="loaiKhac">Loại khác</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="detectedAt">Ngày thêm</label>
            <input
              id="detectedAt"
              name="detectedAt"
              type="datetime-local"
              value={form.detected_at}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Ngày hết hạn</label>
            <input
              id="expiryDate"
              name="expiryDate"
              type="datetime-local"
              value={form.expiry_date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="unit">Đơn vị</label>
            <input
              id="unit"
              name="unit"
              value={form.unit}
              onChange={handleChange}
              required
              placeholder="Nhập đơn vị tính.."
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Số lượng</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productNote">Ghi chú</label>
            <input
              id="productNote"
              name="productNote"
              value={form.notes}
              onChange={handleChange}
              placeholder="Nhập ghi chú về sản phẩm tại đây....."
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Link ảnh</label>
            <input
              id="image"
              name="image"
              value={form.image_url}
              onChange={handleChange}
              placeholder="Dán link ảnh sản phẩm"
            />
          </div>

          <div className="modal-buttons">
            <button type="submit">Lưu</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Hủy
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddEditProductModal;
