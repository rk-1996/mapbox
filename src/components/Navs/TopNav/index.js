import React, {Component} from 'react';
import './topNavStyle.scss';
import {NavLink, withRouter} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";

class TopNav extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
      search: ''
    };
  }
  /*this functions is for feature uses for collapse menu*/
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <div className="top-nav container-fluid mb-3 mb-md-0">
        <nav className="navbar row navbar-light bg-white px-4 d-flex align-items-center">
          <NavLink to="/" className="navbar-brand d-flex col-5 col-lg-6  col-xl-7 my-2">
            ESG analytics
          </NavLink>
        </nav>
      </div>
    );
  }
}


const mapDispatchToProps = {

};

const mapStateToProps = ({SearchReducer}) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopNav));
