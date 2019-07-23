import React, { Component } from 'react'

export interface HelloProps { compiler: string; framework: string }

class App extends Component<HelloProps, {}> {
  render() {

    const { compiler, framework } = this.props
    const sum = (a: number, b: number): number => a + b

    return (
      <>
        <h1>Hello from {compiler} and {framework}!</h1>
        {sum(2, 3)}
      </>
    )
  }
}

export default App
