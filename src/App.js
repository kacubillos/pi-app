import vueIcon from './images/vue.svg';
import pythonIcon from './images/python.svg';
import postgresIcon from './images/postgresql.svg';
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'
import profile3 from './images/profile3.png'
import profile4 from './images/profile4.png'
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import CardProfile from './components/CardProfile';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Banner title="AGROFARM" description="Frase motivadora de la pagina" />
      </header>
      <main>
        <article className='App-section'>
          <h2>Herramientas</h2>
          <section className='d-flex-between'>
            <Card name="Vue.js" image={vueIcon} colorCard="#E3FAF9" />
            <Card name="Python" image={pythonIcon} colorCard="#FAE9E1" />
            <Card name="PostgreSQL" image={postgresIcon} colorCard="#E7E1FA" />
          </section>
        </article>

        <article className='App-section d-flex-between dark-section'>
          <h2>Integrantes</h2>
          <section className='wrapper'>
            <CardProfile name="Kevin Cubillos Pinzon" image={profile1} />
            <CardProfile name="Luis Bohorquez Guayara" image={profile2} />
            <CardProfile name="Laura Garcia Salcedo" image={profile3} />
            <CardProfile name="Eduardo Villamizar Sanchez" image={profile4} />
          </section>
        </article>

        <article className='App-section'>
           <h2>Objetivo general</h2>
            <p>Desarrollar una aplicación web para fomentar el correcto uso de los recursos naturales en pequeñas producciones agrícolas, asesorando a los productores en la gestión de sus cultivos</p> 
           <h2>Objetivos especificos</h2>
           <section className='d-flex-between'>
             <Card name="objetivo 1"  />
             <Card name="Objetivo 2" />
             <Card name="Objetivo 3" />
           </section>
        </article>
      </main>
    </div>
  );
}

export default App;
