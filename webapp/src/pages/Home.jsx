import "./Home.css";
import { INITIAL_PRODUCTS } from "../constants/index.jsx";
import Slider from "../components/ImageSlider.jsx"
const Home = () => {
  const products = INITIAL_PRODUCTS;
  return (
    <div className="dashboard-container">
      <div className="banner">
        <Slider />
      </div>
      <h1 className="dashboard-title">Cùng kiểm tra xem trong tủ có gì nhé!</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image_url} alt={product.product_name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.product_name}</h3>
              <p>Phân loại : {product.category}</p>
              <p>Số lượng : {product.quantity + " " + product.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;