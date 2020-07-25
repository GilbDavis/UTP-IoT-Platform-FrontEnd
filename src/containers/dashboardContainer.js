import React from 'react';
import { Switch } from 'react-router-dom'
import styles from './dashboardContainer.module.scss';

import PrivateRoute from '../components/privateRoute/privateRoute';
import NavBar from '../components/NavBar/NavBar';
import SideNav from "../components/SideNav/SideNav";
import ContentContainer from "../components/dashboardComponents/container/Container";
import BreadCrumb from '../components/BreadCrumb/BreadCrumbs';
import LemsTina from '../containers/DashboardViews/Lems/Lems';
import DataCenter from '../containers/DashboardViews/DataCenter/DataCenter';

const DashboardContainer = (props) => {

  return (
    <div className={styles.Dashboard_Container}>
      <NavBar />
      <SideNav />
      <ContentContainer>
        <h5 className={styles.Heading}>Gráficos</h5>
        <Switch>
          <PrivateRoute exact path={`${props.match.path}/datacenter`}>
            <BreadCrumb urlTo={`${props.match.path}/datacenter`}
              label="Centro de Datos"
            />
            <div className="divider" style={{ marginBottom: '20px' }}></div>
            <DataCenter />
          </PrivateRoute>

          <PrivateRoute exact path={`${props.match.path}/lems`}>
            <BreadCrumb urlTo={`${props.match.path}/lems`}
              label="Laboratorio de ensayo de materiales y suelos"
            />
            <div className="divider" style={{ marginBottom: '20px' }}></div>
            <LemsTina />
          </PrivateRoute>
        </Switch>
      </ContentContainer>
    </div>
  );
};

export default DashboardContainer;