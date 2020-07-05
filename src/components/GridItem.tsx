// Libraries
import React from 'react'

// Types
import type { GridItemProps } from '../index'

function GridItem({
  // 'grid-column-start'
  columnStart,
  // 'grid-column-end'
  columnEnd,
  // 'grid-column'
  column,

  // 'grid-row-start'
  rowStart,
  // 'grid-row-end'
  rowEnd,
  // 'grid-row'
  row,

  // required
  style = {},
  children,
  ...rest
}: GridItemProps): React.ReactElement {
  const gridColumnStartStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridColumnStart: columnStart,
    }),
    [columnStart],
  )

  const gridColumnEndStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridColumnEnd: columnEnd,
    }),
    [columnEnd],
  )

  const gridColumnStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridColumn: column,
    }),
    [column],
  )

  const gridRowStartStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridRowStart: rowStart,
    }),
    [rowStart],
  )

  const gridRowEndStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridRowEnd: rowEnd,
    }),
    [rowEnd],
  )

  const gridRowStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridRow: row,
    }),
    [row],
  )

  return (
    <div
      style={{
        ...gridColumnStartStyle,
        ...gridColumnEndStyle,
        ...gridColumnStyle,
        ...gridRowStartStyle,
        ...gridRowEndStyle,
        ...gridRowStyle,
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default GridItem
