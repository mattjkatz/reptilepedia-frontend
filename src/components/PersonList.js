import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

// export default function PersonList() {
//   return (
//     <nav>
//       <img src={require("../images/react-icon-small.png")} alt="" className="nav--icon" />
//       <h3 className="nav--logo_text">ReactFacts</h3>
//       <h4 className="nav--title">React Course - Project 1</h4>
//     </nav>
//   );
// }
