import React, { Fragment, Component } from 'react';
import Loader from '../components/common/Loader';
import Header from '../components/common/Header';
import { getFetch } from '../services/Utils';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.setUsers = this.setUsers.bind(this);

    getFetch('https://jsonplaceholder.typicode.com/posts', this.setUsers);
  }

  setUsers(data) {
    this.setState({
      users: data,
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.users.length === 0 ? <Loader /> : null}
        <Header />
        <div className="logo">
          <img alt="logo" src="https://www.novencia.com//wp-content/themes/novencia/img/deafaultlogo.png" />
        </div>
      </Fragment>
    );
  }
}

export default Home;
