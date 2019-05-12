import React, { Component } from 'react';

function* testing() {
  while (true) {
    yield 1;
    yield 2;
    yield 3;
  }
}

class App extends Component {
  render() {
    const iterator = testing();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return <div>test</div>;
  }
}

export default App;
