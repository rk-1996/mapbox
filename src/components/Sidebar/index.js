import React, { Component } from 'react';
import './sidebarStyle.scss'
import connect from "react-redux/lib/connect/connect";
import { withRouter } from "react-router-dom";
import { selectMenu } from "../../redux/actions";
import { Multiselect } from 'multiselect-react-dropdown';
import allCountries from './../../utils/AllCountries'

class Sidebar extends Component {
  constructor(props) {
    console.log(allCountries)
    super(props);
    this.style = {
      chips: {
        background: "red",
      },
      multiselectContainer: {
        color: "red"
      },
    };
    this.state = {
      menu: [
        {
          name: 'Loss in Employment Income'
        },
        {
          name: 'Expected Loss in Employment Income'
        },
        {
          name: 'Food Security'
        },
        {
          name: 'Delayed Medical Care'
        },
        {
          name: 'Housing Insecurity'
        },
        {
          name: 'K-12 Educational Changes'
        }
      ],
      options: [{ name: 'Calibration', id: 1 }, { name: 'Texas', id: 2 }, { name: 'Washington', id: 3 }],
      optionsMetro: [{ name: 'Metro 1', id: 1 }, { name: 'Metro 1', id: 2 }, { name: 'Metro 3', id: 3 }],
      selectedValue: [],
      selectedMetro: [],
      selectedCountry: [],
      optionCountry: allCountries,
      optionSchoolDiscricts: [{ name: 'school 1', id: 1 }, { name: 'school 1', id: 2 }, { name: 'school 3', id: 3 }],
      selectedSchool: [],
    }
  }

  onSelect(selectedList, selectedItem) {
    // let data = this.state.selectedValue;
    // data = selectedList;
    // console.log(data)
  }

  onRemove(selectedList, removedItem) {
    // let data = this.state.selectedValue;
    // data = selectedList;
    // console.log(data)
  }

  onSelectMetro(selectedList, selectedItem) {
    // let data = this.state.selectedValue;
    // data = selectedList;
    // console.log(data)
  }

  onRemoveMetro(selectedList, removedItem) {
    // let data = this.state.selectedValue;
    // data = selectedList;
    // console.log(data)
  }

  onSelectCountry(selectedList, selectedItem) {
    // let data = this.state.selectedValue;
    // data = selectedList;
    // console.log(data)
  }

  onRemoveCountry(selectedList, removedItem) {
    // let data = this.state.selectedValue;
    // data = selectedList;
    // console.log(data)
  }


  render() {
    return (
      <div className="sidebar-con w-100">
        <ul>
          {
            this.state.menu.map((data, i) => <li
              onClick={() => this.props.selectMenu(data.name)}
              style={{ backgroundColor: this.props.menu === data.name ? 'rgb(0, 122, 217)' : '' }}
              className={`${this.props.menu === data.name ? 'text-white' : ''} f-14 cursor-pointer`} key={i}>
              {
                data.name
              }
            </li>)
          }
        </ul>
        <div className="mx-2 my-3 my-sm-4">
          <h3 className="text-left">Filter By:</h3>
          <Multiselect
            placeholder="State"
            options={this.state.options} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          <div className="mt-2"></div>
          <Multiselect
            placeholder="Metro Area"
            options={this.state.optionsMetro}
            selectedValues={this.state.selectedMetro}
            onSelect={this.onSelectMetro}
            onRemove={this.onRemoveMetro}
            displayValue="name"
          />
          <div className="mt-2"></div>
          <Multiselect
            displayValue="key"
            style={this.style}
            placeholder="Countries"
            options={this.state.optionCountry}
            selectedValues={this.state.selectedCountry}
            onSelect={this.onSelectCountry}
            onRemove={this.onRemoveCountry}
            displayValue="name"
          />
          <div className="mt-2"></div>
          <Multiselect
            displayValue="key"
            style={this.style}
            placeholder="School districts"
            options={this.state.optionSchoolDiscricts}
            selectedValues={this.state.selectedSchool}
            onSelect={this.onSelectCountry}
            onRemove={this.onRemoveCountry}
            displayValue="name"
          />
        </div>
        <div className="ml-2">
          <button onClick={() => this.props.selectMenu('Loss in Employment Income')} className="btn bg-info" type="button">
            Reset
        </button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  selectMenu
};

const mapStateToProps = ({ MenuReducer }) => {
  const { menu } = MenuReducer;
  return { menu }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));
