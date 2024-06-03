import './App.css';

function App() {
    
  return (
    <div>
      <nav id="Navbar">
        <div className="logo"></div>
        <div className="UlNavbar">
          <ul>
            <li className="dropdown">
              All Collections <i className="fa fa-angle-down"></i>
            </li>
            <li>Product</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="BarIcons">
          <ul>
            <li><i className="fa fa-search" style={{ fontSize: '24px' }}></i></li>
            <li><i className="fa fa-cart-plus"></i> </li>
            <li><i className="fa fa-align-left"></i></li>
          </ul>
        </div>

      </nav>
      <div id="SignHeader">
        <h1>Login</h1>
        <form id="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
        <h2>Login Data</h2>
        <table id="login-data-table">
          <thead>
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <script src="a.js"></script>

    </div>
  );
}

export default App;
