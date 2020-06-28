// Libraries
import React from 'react'

export class Grid extends React.Component {
  static Item = (<div></div>)

  render(): React.ReactElement {
    return <div {...this.props} />
  }
}

export default Grid
