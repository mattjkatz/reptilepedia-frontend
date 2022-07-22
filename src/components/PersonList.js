import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    reptiles: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/reptiles`).then((response) => {
      const reptiles = response.data;
      this.setState({ reptiles });
    });
  }

  render() {
    return (
      <ul>
        {this.state.reptiles.map((reptile) => (
          <li key={reptile.id}>{reptile.com_name}</li>
        ))}
      </ul>
    );
  }
}
