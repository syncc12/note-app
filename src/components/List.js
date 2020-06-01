import React from 'react';

class List extends React.Component {

  // constructor() {
  //   super();
  // }

  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="list-container">
        List Component
      </div>
    );
  }
}

export default List;