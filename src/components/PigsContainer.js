import React from "react";
import PigsList from "./PigsList"
import Hogs from "../porkers_data"
import Filters from "./Filters"

class PigsContainer extends React.Component {
  state = {
    pigs: Hogs
  };

  filter = (filterState) => {
    let pigs = this.state.pigs;

    if(filterState.greasyValue !== false) {
      pigs = pigs.filter(pig => pig.greased === true)
    }

    if (filterState.greasyValue === false && filterState.sortBy === "none") {
      pigs = Hogs;
    } else if (filterState.greasyValue === false && pigs.length !== Hogs.length) {
      pigs = Hogs;
    }

    if (filterState.sortBy === "name") {
      pigs = pigs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filterState.sortBy === "weight") {
      pigs = pigs.sort((a, b) => {
        return b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      });
    }
    this.setState({pigs: pigs});
  }

  render() {
    return (
      <div className="pigs-container">
        <div className="ui segment container">
          <div className="filter-container">
            <Filters filter={this.filter}  />
          </div>
          <div className="ui divider"></div>
          <PigsList pigs={this.state.pigs}/>
        </div>
      </div>
    );
  }
}

export default PigsContainer;