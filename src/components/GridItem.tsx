// Libraries
import React from 'react'

// Types
import type { GridItemProps } from '../index'

// Helpers
import { checkOverlapping } from '../helpers/overlapping'
import { JustifySelfProperty, AlignSelfProperty } from 'csstype'

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

  // 'grid-area'
  area,

  // 'justify-self' short
  justifySelfStart,
  justifySelfEnd,
  justifySelfCenter,
  justifySelfStretch,
  // 'justify-self' manual
  justifySelf,

  // 'align-self' short
  alignSelfStart,
  alignSelfEnd,
  alignSelfCenter,
  alignSelfStretch,
  // 'align-self' short
  alignSelf,

  // 'place-self'
  placeSelf,

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

  const gridAreaStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridArea: area,
    }),
    [area],
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

  const alignSelfStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (alignSelf) return { alignSelf }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('align-self', alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfStretch)
    let value: AlignSelfProperty | null = null
    if (alignSelfStart) value = 'start'
    else if (alignSelfEnd) value = 'end'
    else if (alignSelfCenter) value = 'center'
    else if (alignSelfStretch) value = 'stretch'
    return value ? { alignSelf: value } : {}
  }, [alignSelf, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfStretch])

  const placeSelfStyle = React.useMemo(
    (): React.CSSProperties => ({
      placeSelf,
    }),
    [placeSelf],
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
        ...gridAreaStyle,
        ...justifySelfStyle,
        ...alignSelfStyle,
        ...placeSelfStyle,
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default GridItem
