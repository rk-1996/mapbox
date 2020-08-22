import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import RightBarChart from "../../components/RightBarChart";
import MapComponent from "../../components/MapComponent";
// import Sidebar from "../../components/Sidebar";
import Sidebar from "../../components/NewSidebar/Sidebar";
import connect from "react-redux/lib/connect/connect";
import { withRouter } from "react-router-dom";
import RightLineChart from "../../components/RightLineChart";

mapboxgl.accessToken = 'pk.eyJ1IjoidmlqYXlzYWRodSIsImEiOiJja2Rsb2Q2cGIwdjYxMzBsNGo3MjJxaTBjIn0.DwbB08ZAA5E1p9OABViN8g';

class CatDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: false
    }
  }

  render() {

    return (
      <Sidebar />
      // <div className="container-fluid d-flex text-center p-0">
      //   <div className="side-wrapper d-flex">
      //   </div>
      //   <div className="conant-wrapper d-flex flex-column">
      //     <div style={{ backgroundColor: 'rgb(0, 122, 217)' }}
      //       className="d-flex justify-content-between align-items-center py-3 text-white">
      //       <span>
      //         <i onClick={() => this.props.history.push('/')} className="fa fa-arrow-left ml-2 cursor-pointer" aria-hidden="true" title="Home" />
      //       </span>
      //       <span>
      //         {this.props.menu}
      //       </span>
      //       <span>
      //       </span>
      //     </div>
      //     <div className="row  d-flex align-items-stretch">
      //       <div className="col-12 col-md-6">
      //         <MapComponent />
      //       </div>
      //       <div className="col-12 col-md-6">
      //         {
      //           this.state.graph ?
      //             <RightLineChart />
      //             :
      //             <RightBarChart />
      //         }
      //       </div>
      //       <div className="col-12 col-md-6">
      //       </div>
      //       <div className="col-12 col-md-6">
      //         <button
      //           type="button"
      //           onClick={() => this.setState({ graph: !this.state.graph })}
      //           className="btn"
      //         >
      //           <i className="fa fa-refresh" /> Switch Graph
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}


const mapDispatchToProps = {};

const mapStateToProps = ({ MenuReducer }) => {
  const { menu } = MenuReducer;
  return { menu }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CatDetails));
