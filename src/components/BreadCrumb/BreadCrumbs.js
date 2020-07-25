import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ urlTo, label }) => {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <div className="col s12">
        <p style={{fontSize: "18px"}}>Gráficos/<Link to={urlTo} className="breadcrumb blue-text">{label}</Link></p>
      </div>
    </div>
  );
};

export default BreadCrumbs;