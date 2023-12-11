import React from "react";
import PropTypes from "prop-types";

class InputRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onEmailChange(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onPasswordChange(e) {
    this.setState(() => {
      return {
        password: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          className="border-0 text-white bg-[#121212] text-2xl font-bold py-2 w-full focus:outline-none focus:ring-0"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-0 text-white bg-[#121212] text-2xl font-bold py-2 w-full focus:outline-none focus:ring-0"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="border-0 text-white bg-[#121212] text-2xl font-bold py-2 w-full focus:outline-none focus:ring-0"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />
      </form>
    );
  }
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
