import React from 'react';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div> <hr />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Salwa's </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Beranda <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/TentangSaya">Tentang saya</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Karya">Karya</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Kontak">Kontak</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<p><Utama /></p>
      </div>
    );
  }
}

export default App;