// Libraries
import React from 'react'
import type { Property } from 'csstype'

// Helpers
import { checkOverlapping } from '../helpers/overlapping'
import { trimUndefined } from '../helpers/trim'

// Types
import type { GridContainerProps, ContainerTags } from '../index'

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

  // 'grid-column-gap' or 'column-gap'
  columnGap,

  // 'grid-row-gap or row-gap'
  rowGap,

  // 'justify-items' short
  justifyItemsStart,
  justifyItemsEnd,
  justifyItemsCenter,
  justifyItemsStretch,
  // 'justify-items' manual
  justifyItems,

  // 'align-items' short
  alignItemsStart,
  alignItemsEnd,
  alignItemsCenter,
  alignItemsStretch,
  // 'align-items' manual
  alignItems,

  // 'place-items'
  placeItems,

  // 'justify-content' short
  justifyContentStart,
  justifyContentEnd,
  justifyContentCenter,
  justifyContentStretch,
  justifyContentSpaceAround,
  justifyContentSpaceBetween,
  justifyContentSpaceEvenly,
  // 'justify-content' manual
  justifyContent,

  // 'align-content' short
  alignContentStart,
  alignContentEnd,
  alignContentCenter,
  alignContentStretch,
  alignContentSpaceAround,
  alignContentSpaceBetween,
  alignContentSpaceEvenly,
  // 'align-content' manual
  alignContent,

  // 'place-content'
  placeContent,

  // 'grid-auto-flow' short
  autoFlowRow,
  autoFlowColumn,
  autoFlowDense,
  // 'grid-auto-flow' manual
  autoFlow,

  // 'grid-auto-rows'
  autoRows,

  // 'grid-auto-columns'
  autoColumns,

  // tag name
  as: tagName,

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
      gridColumnGap: columnGap,
    }),
    [columnGap],
  )

  const gridRowGapStyle = React.useMemo(
    (): React.CSSProperties => ({
      rowGap,
      gridRowGap: rowGap,
    }),
    [rowGap],
  )

  const justifyItemsStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (justifyItems) return { justifyItems }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('justify-items', justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch)
    let value: Property.JustifyItems | null = null
    if (justifyItemsStart) value = 'start'
    else if (justifyItemsEnd) value = 'end'
    else if (justifyItemsCenter) value = 'center'
    else if (justifyItemsStretch) value = 'stretch'
    return value ? { justifyItems: value } : {}
  }, [justifyItems, justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch])

  const alignItemsStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (alignItems) return { alignItems }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('align-items', alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsStretch)
    let value: Property.AlignItems | null = null
    if (alignItemsStart) value = 'start'
    else if (alignItemsEnd) value = 'end'
    else if (alignItemsCenter) value = 'center'
    else if (alignItemsStretch) value = 'stretch'
    return value ? { alignItems: value } : {}
  }, [alignItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsStretch])

  const placeItemsStyle = React.useMemo(
    (): React.CSSProperties => ({
      placeItems,
    }),
    [placeItems],
  )

  const justifyContentStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (justifyContent) return { justifyContent }
    // see if a specific value has been provided, first come first serve
    checkOverlapping(
      'justify-content',
      justifyContentStart,
      justifyContentEnd,
      justifyContentCenter,
      justifyContentStretch,
      justifyContentSpaceAround,
      justifyContentSpaceBetween,
      justifyContentSpaceEvenly,
    )
    let value: Property.JustifyContent | null = null
    if (justifyContentStart) value = 'start'
    else if (justifyContentEnd) value = 'end'
    else if (justifyContentCenter) value = 'center'
    else if (justifyContentStretch) value = 'stretch'
    else if (justifyContentSpaceAround) value = 'space-around'
    else if (justifyContentSpaceBetween) value = 'space-between'
    else if (justifyContentSpaceEvenly) value = 'space-evenly'
    return value ? { justifyContent: value } : {}
  }, [
    justifyContent,
    justifyContentStart,
    justifyContentEnd,
    justifyContentCenter,
    justifyContentStretch,
    justifyContentSpaceAround,
    justifyContentSpaceBetween,
    justifyContentSpaceEvenly,
  ])

  const alignContentStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (alignContent) return { alignContent }
    // see if a specific value has been provided, first come first serve
    checkOverlapping(
      'align-content',
      alignContentStart,
      alignContentEnd,
      alignContentCenter,
      alignContentStretch,
      alignContentSpaceAround,
      alignContentSpaceBetween,
      alignContentSpaceEvenly,
    )
    let value: Property.AlignContent | null = null
    if (alignContentStart) value = 'start'
    else if (alignContentEnd) value = 'end'
    else if (alignContentCenter) value = 'center'
    else if (alignContentStretch) value = 'stretch'
    else if (alignContentSpaceAround) value = 'space-around'
    else if (alignContentSpaceBetween) value = 'space-between'
    else if (alignContentSpaceEvenly) value = 'space-evenly'
    return value ? { alignContent: value } : {}
  }, [
    alignContent,
    alignContentStart,
    alignContentEnd,
    alignContentCenter,
    alignContentStretch,
    alignContentSpaceAround,
    alignContentSpaceBetween,
    alignContentSpaceEvenly,
  ])

  const placeContentStyle = React.useMemo(
    (): React.CSSProperties => ({
      placeContent,
    }),
    [placeContent],
  )

  const gridAutoFlowStyle = React.useMemo((): React.CSSProperties => {
    // the manual version has been provided, that takes precedence
    if (autoFlow) return { gridAutoFlow: autoFlow }
    // see if a specific value has been provided, first come first serve
    checkOverlapping('grid-auto-flow', autoFlowRow, autoFlowColumn, autoFlowDense)
    let value: Property.GridAutoFlow | null = null
    if (autoFlowRow) value = 'row'
    else if (autoFlowColumn) value = 'column'
    else if (autoFlowDense) value = 'dense'
    return value ? { gridAutoFlow: value } : {}
  }, [autoFlow, autoFlowRow, autoFlowColumn, autoFlowDense])

  const gridAutoRowsStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridAutoRows: autoRows,
    }),
    [autoRows],
  )

  const gridAutoColumnsStyle = React.useMemo(
    (): React.CSSProperties => ({
      gridAutoColumns: autoColumns,
    }),
    [autoColumns],
  )

  const combinedStyle = trimUndefined({
    ...displayStyle,
    ...gridTemplateColumnsStyle,
    ...gridTemplateRowsStyle,
    ...gridTemplateAreasStyle,
    ...gridTemplateStyle,
    ...gridGapStyle,
    ...gridColumnGapStyle,
    ...gridRowGapStyle,
    ...justifyItemsStyle,
    ...alignItemsStyle,
    ...placeItemsStyle,
    ...justifyContentStyle,
    ...alignContentStyle,
    ...placeContentStyle,
    ...gridAutoFlowStyle,
    ...gridAutoRowsStyle,
    ...gridAutoColumnsStyle,
    ...style,
  })

  const Tag = (tagName ?? 'div') as keyof ContainerTags
  return (
    <Tag style={combinedStyle} {...rest}>
      {children}
    </Tag>
  )
}

export default GridContainer
