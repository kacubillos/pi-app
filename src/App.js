import "./App.css";

import Banner from "./components/Banner";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import CardProfile from "./components/CardProfile";
import NavBar from "./components/NavBar";

import plantIMG from './images/plant2.png';
import vueIcon from "./images/vue.svg";
import pythonIcon from "./images/python.svg";
import postgresIcon from "./images/postgresql.svg";
import profile1 from "./images/profile1.png";
import profile2 from "./images/profile2.png";
import profile3 from "./images/profile3.png";
import profile4 from "./images/profile4.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header" id="header">
        <Banner title="AGROFARM" description="Tecnologia para el campo" />
      </header>
      <main>
        <article className="App-section" id="description">
          <h2 className="lg-title">
            ¿Qué puedes hacer en <span className="text-green">Agrofarm</span>?
          </h2>
          <Jumbotron
            title="AgroFarm siempre piensa en el campo"
            image={plantIMG}
            content="En AgroFarm siempre podras encontrar concejos para el buen uso de los recursos naturales y el aprovechaiento de estos en los cultivos" />
        </article>
        <article className="App-section" id="tools">
          <h2 className="md-title">Herramientas utilizadas</h2>
          <section className="d-flex-between">
            <Card name="Vue.js" image={vueIcon} colorCard="#E3FAF9" />
            <Card name="Python" image={pythonIcon} colorCard="#FAE9E1" />
            <Card name="PostgreSQL" image={postgresIcon} colorCard="#E7E1FA" />
          </section>
        </article>

        <article
          className="App-section d-flex-between dark-section"
          id="members"
        >
          <h2>Integrantes</h2>
          <section className="wrapper">
            <CardProfile name="Kevin Cubillos Pinzon" image={profile1} />
            <CardProfile name="Luis Bohorquez Guayara" image={profile2} />
            <CardProfile name="Laura Garcia Salcedo" image={profile3} />
            <CardProfile name="Eduardo Villamizar Sanchez" image={profile4} />
          </section>
        </article>

        <article className="App-section">
          <h2>Objetivo general</h2>
          <p>
            Desarrollar una aplicación web para fomentar el correcto uso de los
            recursos naturales en pequeñas producciones agrícolas, asesorando a
            los productores en la gestión de sus cultivos
          </p>
          <h2>Objetivos especificos</h2>
          <section className="d-flex-between">
            <Card name="objetivo 1" />
            <Card name="Objetivo 2" />
            <Card name="Objetivo 3" />
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
