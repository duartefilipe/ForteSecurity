import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem1 from '../img/forte_logo_principal-01.png';

function Footer(){
    return(
        
            <footer class="footer navbar-fixed-bottom" style={{marginTop: 600}}>
                <div class="bg-dark text-warning pt-3" style={{height: '40px', textAlign: 'center'}}>
                <span>© 2021 Copyright: Filipe Duarte</span>
            </div>
            </footer>
        
    );
}

export default Footer;