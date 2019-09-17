import React from 'react';

class Login extends React.Component {

  render() {
    return (
      <form>
        <label for="nya">Nombres y Apellidos:</label>
        <br />
        <input type="text" name="nya" id="nya" />
        <br /><br />
        <label for="email">Email:</label>
        <br />
        <input type="text" name="email" id="email" />
        <br /><br />
        <label for="edad">Edad:</label>
        <br/>
        <input type="text" name="edad" id="edad" />
        <br /><br />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}


export default Login;