import React from 'react'
import type { GridContainerProps } from '../index'
import GridItem from './GridItem'
export declare class Grid extends React.Component<GridContainerProps> {
  static Item: typeof GridItem
  render(): React.ReactElement
}
export default Grid
