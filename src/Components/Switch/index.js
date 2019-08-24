import React from "react";
import "./index.scss";

class Switch extends React.Component {
  // Define a state object to hold our app's state
  state = {
    // Boolean attribute that will allow us to toggle the switch
    // Keep the switch on if the theme is dark
    checked: localStorage.getItem("theme") === "dark" ? true : false
  };

  componentDidMount() {
    // Update the data-theme attribute of our html tag
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  // Class method allowing us to toggle the theme change
  toggleThemeChange = () => {
    const { checked } = this.state;
    // If theme is light then change to dark
    if (checked === false) {
      // Update localstorage
      localStorage.setItem("theme", "dark");
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value
       */
      // Update the data-theme attribute of our html tag
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      // Update our state
      this.setState({
        // Ensure our switch is on if we change to dark theme
        checked: true
      });
    } else {
      // Update localstorage
      localStorage.setItem("theme", "light");
      /**
       * The document.getElementsByTagName(...).setAttribute(...)
       * will only update the value until the App is mounted and we change
       * the state of the switch so we will need to introduce
       * a React lifecycle called ˝componentDidMount()˝
       */
      // Update the data-theme attribute of our html tag
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      // Update our state
      this.setState({
        // Ensure our switch is off if we change to light theme
        checked: false
      });
    }
  };

  render() {
    return (
      <div className="switch-holder">
        <section>
          <p>The white hurting the eyes</p>
          <label className="switch">
            {/* checked attribute is used to determine the state of 
              checkbox
              ----------------------------------------------
              The onChange attribute will toggle our theme change
            */}
            <input
              type="checkbox"
              defaultChecked={this.state.checked}
              onChange={() => this.toggleThemeChange()}
            />
            <span className="slider round" />
          </label>
        </section>
      </div>
    );
  }
}

export default Switch;
