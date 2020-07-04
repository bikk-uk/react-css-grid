// Libraries
import React from 'react'
import { JustifyItemsProperty } from 'csstype'

// Helpers
import { checkOverlapping } from '../helpers/overlapping'

// Types
import type { GridContainerProps } from '../index'

function GridContainer({
  // 'display'
  inline,

  // 'grid-template-columns'
  columns,

  // 'grid-template-rows'
  rows,

  // 'grid-template-areas'
  areas,

  // 'grid-template'
  template,

  // 'grid-gap' or 'gap'
  gap,
  gridGap,

  // 'column-gap'
  columnGap,

  // 'row-gap'
  rowGap,

  // 'justify-items' short
  justifyItemsStart,
  justifyItemsEnd,
  justifyItemsCenter,
  justifyItemsStretch,
  // 'justify-items' manual
  justifyItems,

  // required
  style = {},
  children,
  ...rest
}: GridContainerProps): React.ReactElement {
  const displayStyle = React.useMemo(
    (): React.CSSProperties => ({
      display: inline ? 'inline-grid' : 'grid',
    }),
    [inline],
  )

  const gridTemplateColumnsStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridTemplateColumns: columns,
    }),
    [columns],
  )

  const gridTemplateRowsStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridTemplateRows: rows,
    }),
    [rows],
  )

  const gridTemplateAreasStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridTemplateAreas: areas,
    }),
    [areas],
  )

  const gridTemplateStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridTemplate: template,
    }),
    [template],
  )

  const gridGapStyle = React.useMemo(
    (): React.CSSProperties => ({
      gap: gap || gridGap,
      gridGap: gap || gridGap,
    }),
    [gap, gridGap],
  )

  const gridColumnGapStyle = React.useMemo(
    (): React.CSSProperties => ({
      columnGap,
    }),
    [columnGap],
  )

  const gridRowGapStyle = React.useMemo(
    (): React.CSSProperties => ({
      rowGap,
    }),
    [rowGap],
  )

  const justifyItemsStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (justifyItems) return { justifyItems }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('justify-items', justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch)
    let value: JustifyItemsProperty | null = null
    if (justifyItemsStart) value = 'start'
    else if (justifyItemsEnd) value = 'end'
    else if (justifyItemsCenter) value = 'center'
    else if (justifyItemsStretch) value = 'stretch'
    return value ? { justifyItems: value } : {}
  }, [justifyItems, justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch])

  return (
    <div
      style={{
        ...displayStyle,
        ...gridTemplateColumnsStyle,
        ...gridTemplateRowsStyle,
        ...gridTemplateAreasStyle,
        ...gridTemplateStyle,
        ...gridGapStyle,
        ...gridColumnGapStyle,
        ...gridRowGapStyle,
        ...justifyItemsStyle,
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default GridContainer
