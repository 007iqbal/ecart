import logo from '../../assets/images/logo2.png';

let Header = ()=>{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid"> 
        <a className="navbar-brand" href="#">
          <img id="brand_logo" src={logo} alt="logo" className="mx-lg-3" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <form className="d-flex px-lg-2">
            <input className="form-control me-2 input_search" type="search" placeholder="Search Product" aria-label="Search" />
            <button className="btn btn-danger" type="submit">Search</button>
          </form>

            <li className="nav-item ms-lg-5">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Hot Deals</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#">Categories</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          </ul>

          <div className="px-lg-5"> 
            <a href="/" className="cart text-light me-4">
            <i class="fas fa-shopping-cart"></i>
            </a>

            <a href="/" className="wishlist text-light">
            <i class="fas fa-heart"></i>
            </a>
          </div>

          <button className="btn btn-danger  mx-lg-5 my-lg-0 my-4">Login</button>
         
        </div>
      </div>
    </nav>
  )
}

export default Header;