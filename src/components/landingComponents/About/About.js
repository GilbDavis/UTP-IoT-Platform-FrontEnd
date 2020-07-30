import React from 'react';
import styles from './About.module.scss';
import { Link } from 'react-router-dom';

import platformBack from '../../../assets/platformback.png';

const About = () => {
  return (
    <div>
      <section className={styles.About_Section} id="AboutSection">
        <div>
          <img className={styles.Background_Image} src={platformBack} alt="platform-background" />
        </div>

        <div className={styles.Content_Container}>
          <h3 className={styles.Title}>Bocas IoT Monitoring</h3>
          <p>
            En el año 2019 el <a href="http://www.investigadores.utp.ac.pa/investigadores/jose.mendoza" rel="noopener noreferrer" target="_blank">Dr. Jose Mendoza </a>
            junto a su equipo de trabajo realizaron la <a href="" rel="noopener noreferrer">investigación</a> inicial que conllevó al desarrollo e implementación de esta plataforma
            por el estudiante <a href="https://github.com/GilbDavis" rel="noopener noreferrer" target="_blank">Gilberto Davis</a> como proyecto final de culminacion de la Licenciatura en Desarrollo de Software.
          </p>
          <p>
            La principal función de la plataforma consiste en monitorear y almacenar la temperatura de la tina de
            curado de hormigón para optimizar el control de calidad adecuado para el óptimo desarrollo del hormigón; y de la temperatura y humedad del cuarto de
            comunicaciones (Centro de Datos) y al mismo tiempo presentandolos en la plataforma en tiempo real.
          </p>
          <p>
            La plataforma fue desarrollado bajo un modelo cliente/servidor utilizando las siguientes tecnologías:
              <li>WebSockets</li>
            <li>MQTT</li>
            <li>React</li>
            <li>ExpressJs</li>
            <li>Scss</li>
          </p>

          <Link to="/login" className={`waves-effect waves-light btn-large ${styles.Login_link}`}>Ir a la plataforma</Link>
        </div>
      </section>
    </div>
  );
};

export default About;