import React, { Fragment, Component } from 'react';
import Header from '../components/common/Header';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>TEST PAGE</div>
      </Fragment>);
  }
}

export default Test;
