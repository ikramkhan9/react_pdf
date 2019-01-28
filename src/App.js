import React, { Component } from 'react';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

//import doc from './Mydocument';

//import { PDFViewer } from '@react-pdf/renderer';


//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const doc = new jsPDF();
    var totalPagesExp = "{total_pages_count_string}";
    //doc.text(14,10, '');

    doc.autoTable({html: '#my-table', margin: {top: 22}, 
      didDrawPage: function (data) {
        // Header
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.text(14,10, 'Dow University of Health Sciences');
        doc.text(14,18, 'Current FCPS-II Trainees');

        doc.setFontSize(9);
        let dt = new Date();
        doc.text(170,18, 'Print: ' + dt.getDate() + '-' + (dt.getMonth() + 1) + '-' + dt.getFullYear());

        // Footer
        var str = "Page " + doc.internal.getNumberOfPages()
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
            str = str + " of " + totalPagesExp;
        }
        doc.setFontSize(10);
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);

      }
    });

    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
      doc.putTotalPages(totalPagesExp);
  }

    doc.save('table.pdf');
  }

  
  render() {
  
    return (
      <div className="App">
        <h3>PDF in ReactJS</h3>

        <table id="my-table">

        <thead>          
          <tr>
            <th scope="col">S#</th>
            <th scope="col">Trainee Name</th>
            <th scope="col">Father Name</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>

          <tr>
            <th scope="row">1</th>
            <td>Mohammad Ikram Khan</td>
            <td>mohammad Islam Khan</td>
            <td>0300-1235689</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Syed Aatir Ali</td>
            <td>Syed Salman Ali</td>
            <td>0333-5456709</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abdul Basir</td>
            <td>Mohammad Bashir Ali</td>
            <td>0345-2398489</td>
          </tr>
        </tbody>
        </table>

        
        
          
        
      </div>
    );
  }
}

export default App;
