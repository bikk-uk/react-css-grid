// Libraries
import React from 'react'

// Types
import type { GridItemProps } from '../index'

function GridItem({
  // 'grid-column-start'
  columnStart,

  // 'grid-column-end'
  columnEnd,

  // 'grid-row-start'
  rowStart,

  // 'grid-row-end'
  rowEnd,

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

  return (
    <div
      style={{
        ...gridColumnStartStyle,
        ...gridColumnEndStyle,
        ...gridRowStartStyle,
        ...gridRowEndStyle,
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default GridItem
