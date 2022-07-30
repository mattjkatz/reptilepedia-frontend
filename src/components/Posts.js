import React from "react";
import axios from "axios";

export default class Posts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/posts`).then((response) => {
      const posts = response.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="card mb-3">
        <h1>posts.caption</h1>
        <p>posts.body</p>
        <img className="card-img-top" src="..." alt="Card cap"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  }
}
