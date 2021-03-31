
import './Navbar.css';
export default function NavBar() {

    return (
        <>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#"><i class="fas fa-shopping-bag"></i> NeoG <span>Fashion</span></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <form class="d-flex">
        <a> <i class="fas fa-shopping-cart"></i> Cart</a>
        <a><i class="fas fa-user"></i> Sign in</a>
    </form>
          
  </div>

</div>
</nav>
</div>
        </>
    )
}