import React from "react";

class Filters extends React.Component {
  state = {
    greasyValue: false,
    sortBy: "none"
  }

  handleChange = (e) => {
    const property = e.target.name;
    let value = e.target.value;

    if (property === "greasyValue" && value === "on" && this.state.greasyValue === "on") {
      value = false;
    }
    this.setState({[property]: value}, () => this.props.filter(this.state));
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="two fields">
            <div className="two wide field">
              <label>Sort</label>
              <select value={this.state.sortBy} name="sortBy" onChange={this.handleChange} className="ui dropdown">
                <option value="none">None</option>
                <option value="weight">Weight</option>
                <option value="name">Name</option>
              </select>
            </div>
            <div className="two wide field">
              <div className="ui toggle checkbox">
                <input type="checkbox" name="greasyValue" onChange={this.handleChange} checked={this.state.greasyValue} />
                  <label>Greased</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filters;