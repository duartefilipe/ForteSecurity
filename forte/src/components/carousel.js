import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Imagem1 from '../img/forte_security_partners_arc.png';
import Imagem2 from '../img/forte_security_partners_prox.png';
import Imagem3 from '../img/forte_security_partners_vmware.png';

export default () => (
    <Carousel autoPlay>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Imagem1} class="d-block w-100 image-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ARC</h5>
        <p>Parceria com ARC.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Imagem2} class="d-block w-100 image-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>ProxMox</h5>
        <p>Parceria com ProxMox.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Imagem3} class="d-block w-100 image-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>VMWare</h5>
        <p>Parceria com VMWare.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </Carousel>
  );
  