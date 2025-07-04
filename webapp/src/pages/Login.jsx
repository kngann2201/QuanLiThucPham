import { useState } from 'react';
import './Login.css'; // Import CSS riêng
import 'animate.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="flex">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Nhận diện nhanh – Nhắc hạn kịp thời.<br />Quản lý thực phẩm chưa bao giờ dễ đến thế.</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
