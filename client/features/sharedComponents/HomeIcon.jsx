import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
  Redirect
} from "react-router-dom";
import './HomeIcon.css';

class HomeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
    this.homeClick = this.homeClick.bind(this);

  }

  homeClick() {
    this.setState({
      redirect: !this.state.redirect
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/home" />
      );
    }
    return (
      <img alt="svgImg" className="homeIcon" onClick={this.homeClick} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0OThkYiI+PHBhdGggZD0iTTg2LDE0LjMzMzMzYy0xLjkxNDM1LDAuMDAwMjUgLTMuNzQ5MDMsMC43NjYzOCAtNS4wOTUwNiwyLjEyNzZsLTcyLjI4MjU1LDYzLjA3MjI2Yy0wLjkxNTUsMC42NzU1NCAtMS40NTU3NywxLjc0NTcxIC0xLjQ1NTczLDIuODgzNDdjMCwxLjk3OTAyIDEuNjA0MzEsMy41ODMzMyAzLjU4MzMzLDMuNTgzMzNoMTcuOTE2Njd2NTcuMzMzMzNjMCwzLjk1NiAzLjIxMDY3LDcuMTY2NjcgNy4xNjY2Nyw3LjE2NjY3aDI4LjY2NjY3YzMuOTU2LDAgNy4xNjY2NywtMy4yMTA2NyA3LjE2NjY3LC03LjE2NjY3di00M2gyOC42NjY2N3Y0M2MwLDMuOTU2IDMuMjEwNjcsNy4xNjY2NyA3LjE2NjY3LDcuMTY2NjdoMjguNjY2NjdjMy45NTYsMCA3LjE2NjY3LC0zLjIxMDY3IDcuMTY2NjcsLTcuMTY2Njd2LTU3LjMzMzMzaDE3LjkxNjY3YzEuOTc5MDIsMCAzLjU4MzMzLC0xLjYwNDMxIDMuNTgzMzMsLTMuNTgzMzNjMC4wMDAwNCwtMS4xMzc3NiAtMC41NDAyMywtMi4yMDc5MiAtMS40NTU3MywtMi44ODM0N2wtNzIuMjQwNTYsLTYzLjAzMDI3Yy0wLjAxMzk0LC0wLjAxNDA2IC0wLjAyNzk0LC0wLjAyODA1IC0wLjA0MTk5LC0wLjA0MTk5Yy0xLjM0NjAzLC0xLjM2MTIzIC0zLjE4MDcxLC0yLjEyNzM2IC01LjA5NTA2LC0yLjEyNzZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
    );
  }
}

export default HomeIcon;