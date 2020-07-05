// Libraries
import React from 'react'

// Types
import type { GridItemProps } from '../index'

// Helpers
import { checkOverlapping } from '../helpers/overlapping'
import { JustifySelfProperty } from 'csstype'

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

  // 'justify-self' short
  justifySelfStart,
  justifySelfEnd,
  justifySelfCenter,
  justifySelfStretch,
  // 'justify-self' manual
  justifySelf,

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

  const justifySelfStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (justifySelf) return { justifySelf }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('justify-self', justifySelfStart, justifySelfEnd, justifySelfCenter, justifySelfStretch)
    let value: JustifySelfProperty | null = null
    if (justifySelfStart) value = 'start'
    else if (justifySelfEnd) value = 'end'
    else if (justifySelfCenter) value = 'center'
    else if (justifySelfStretch) value = 'stretch'
    return value ? { justifySelf: value } : {}
  }, [justifySelf, justifySelfStart, justifySelfEnd, justifySelfCenter, justifySelfStretch])

  return (
    <div
      style={{
        ...gridColumnStartStyle,
        ...gridColumnEndStyle,
        ...gridColumnStyle,
        ...gridRowStartStyle,
        ...gridRowEndStyle,
        ...gridRowStyle,
        ...justifySelfStyle,
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default GridItem
