import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box1';
import Box2 from './components/box2';
import Box3 from './components/box3';
import img1 from './images/tunis.JPG';
import img2 from './images/sousse.JPG';
import img3 from './images/sfax.JPG';


class App extends Component {
  render() {
    let style1 ={
      color : 'grey'
    }



    return (
      <div >
         <h1 style={style1}>Nos Programmes</h1>
         
          <div >
                  <Box name="Full Time Programmes" des="azeyuio" bname="En savoir plus" style='#C1C1C1'/>
                  <Box name="Part Time Programmes" des="azeyuio" bname="En savoir plus" style='#FE4545'/>
                  <Box name="KIDS CODING PROGRAM"  des="azeyuio"bname="En savoir plus" style="#24B0D9"/>
                  <Box name="KIDS CODING PROGRAM"  des="azeyuio"bname="En savoir plus" style="#004C63"/>
          </div> 
          <br/><br/><br/>
          <div className="Box2Style">
              <h2 className="tit">Quelque chiffres</h2>
              <div>
                  <Box2 chiffres="+20.000" des="PASSIONNÉS DU DIGITAL" />
                  <Box2 chiffres="+500" des="ÉTUDIANTS DEPUIS LE DÉMARRAGE EN AOÛT 2016"/>
                  <Box2 chiffres="+300" des="PRODUITS DÉVELOPPÉS"/>
                  <Box2 chiffres="+30" des="INSTRUCTEURS GAME, WEB ET MOBILE"/>
                  <Box2 chiffres="+50" des="SPEAKERS"/>
                  <Box2 chiffres="400m²" des="DE HACKERSPACE AU COEUR DU LAC 1"/>  
              </div> 

              <div>


              </div>

          </div>
          <h3 className="tit"> ou se passent les session </h3>
          <p>les session se passent dans les HACKERSPACE de GOMYCODE dans les villes suivantes l'ebergement est possible dans la limite des places disponibles.</p>
<center>
                <Box3 image={img1} ville="Tunis"/>
                <Box3 image={img2} ville="Sousse"/>
                <Box3 image={img3} ville="Sfax"/>

</center>
      </div>

    );
  }
}

export default App;
