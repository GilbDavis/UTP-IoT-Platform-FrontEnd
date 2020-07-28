import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import pdfConverter from 'jspdf';
import html2canvas from 'html2canvas'

import AuthContext from '../../../context/authentication/authContext';

const Temperature = ({ screenSize, labels, temperatures, location }) => {

  const authContext = useContext(AuthContext);
  const { usuario } = authContext;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperatura',
        data: temperatures,
        fill: false,          // Don't fill area under the line
        borderColor: 'red'  // Line color
      }
    ]
  };

  const chartToPdf = e => {

    const button = e.target;
    button.style.display = "none";
    let input = window.document.getElementsByClassName("div2pdfTemp")[0];

    html2canvas(input, { scale: 3 }).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new pdfConverter("l", "pt");
      pdf.addImage(
        img,
        "png",
        10,
        10,
        input.clientWidth,
        input.clientHeight
      );
      pdf.save(`chart-temperatura-${location}.pdf`);
      button.style.display = "block";
    });
  };

  let adminDownloadChart;

  if (!usuario) {
    return null;
  } else {
    if (usuario.isAdmin) {
      adminDownloadChart = <button className="waves-effect waves-light btn-small"
        style={{ marginTop: '15px' }}
        onClick={e => chartToPdf(e)}
      >
        <i className="material-icons left">cloud_download</i>
      Descargar
    </button>
    } else {
      adminDownloadChart = null;
    }
  }

  return (
    <div className={`col ${screenSize} div2pdfTemp`}>
      <div className="card">
        <div className="card-content">
          <h4 className="card-title">Temperatura del {location}</h4>
          <p className="caption">Temperatura en grados centigrados</p>
          {adminDownloadChart}
        </div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Temperature;