// Libraries
import React from 'react'

// Props
import type { GridContainerProps } from '../index'

// Components
import GridItem from './GridItem'
import GridContainer from './GridContainer'

export class Grid extends React.Component<GridContainerProps> {
  static Item = GridItem

  render(): React.ReactElement {
    return <GridContainer {...this.props} />
  }
}

export default Grid
