import './App.css';
import ListadoRemeras from './Remeras/ListadoRemeras';
import RemeraIndividual from './Remeras/RemeraIndividual';
import { remera } from './Remeras/remeras.model';
import Menu from './Utiles/Menu';

function App() {

  const RemerasSistemasFan: remera[] = [
    {
      id: 1, nombre:'Remera React fan',
    estampa: "../assets/React.jpg"
  },
  {
    id: 2, nombre:'Remera HTML fan',
  estampa: "../assets/HTML.jpg"
},
{
  id: 3, nombre:'Remera GITHUB fan',
estampa: "../assets/GitHub.jpg"
},
{
  id: 4, nombre:'Remera TS fan',
estampa: "../assets/TS.jpg"
},
{
  id: 5, nombre:'Remera AngularJS fan',
estampa: "../assets/AngularJS.jpg"
},
{
  id: 6, nombre:'Remera BULMA fan',
estampa: "../assets/Bulma.jpg"
},
{
  id: 7, nombre:'Remera Drupal fan',
estampa: "../assets/Drupal.jpg"
},
{
  id: 8, nombre:'Remera GraphQL fan',
estampa: "../assets/GraphQL.jpg"
},
{
  id: 9, nombre:'Remera JS fan',
estampa: "../assets/JS.jpg"
},
{
  id: 10, nombre:'Remera NodeGris fan',
estampa: "../assets/NodeGris.jpg"
}
  ]
 
  const RemerasInternetFan: remera[] = [
    {
      id: 11, nombre:'Remera Nerd Mode On fan',
    estampa: "../assets/NerdModeOn.jpg"
  },
  {
    id: 12, nombre:'Remera No Conn fan',
  estampa: "../assets/NoConn.jpg"
  },
  {
  id: 13, nombre:'Remera No Internet fan',
  estampa: "../assets/NoInternerGameOver.jpg"
  },
  {
  id: 14, nombre:'Remera Unable fan',
  estampa: "../assets/Unable.jpg" 
  },
  {
    id: 15, nombre:'Remera GameOver fan',
    estampa: "../assets/GameOver.jpg" 
  }
 ]
  
  return (
    <>
    <Menu/>
    <div className="container">
      <h3>Remeras Programadores Fan</h3>
      <ListadoRemeras remeras={RemerasSistemasFan}/>
   
     <h3>Remeras Internet Fan</h3>
     <ListadoRemeras remeras={RemerasInternetFan}/>
     </div>
     </>
);
}

export default App;
