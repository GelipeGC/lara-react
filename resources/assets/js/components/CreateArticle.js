import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };

    this.addArticle = this.addArticle.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  addArticle() {
    axios
      .post("/articles", {
        title: this.state.title,
        content: this.state.content
      })
      .then(response => {
        this.setState({ title: "", content: "" });
        document.getElementById("new-article-title").value = "";
        document.getElementById("new-article-content");
      });
  }

  changeTitle(event) {
    this.setState({ title: event.target.value });
  }
  changeContent(event) {
    this.setState({ content: event.target.value });
  }
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Create a New Article</div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label htmlFor="new-article-title">Title</label>
              <input
                id="new-article-title"
                className="form-control"
                onChange={this.changeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new-article-content">Content</label>
              <textarea
                id="new-article-content"
                className="form-control"
                onChange={this.changeContent}
                rows="8"
              />
            </div>
          </form>
        </div>
        <div className="panel-footer">
          <button className="btn btn-primary" onClick={this.addArticle}>
            add Article
          </button>
        </div>
      </div>
    );
  }
}

if (document.getElementById("create-article")) {
  ReactDOM.render(<CreateArticle />, document.getElementById("create-article"));
}
