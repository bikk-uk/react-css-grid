// Libraries
import type { Property } from 'csstype'

type ContainerProps<ContainerType> = React.DetailedHTMLProps<React.HTMLAttributes<ContainerType>, ContainerType>

export interface IndexableCSS extends React.CSSProperties {
  [key: string]: string | number | undefined
}

type DisplayCSS = {
  // 'display'
  inline?: boolean
}

type GridTemplateColumnsCSS = {
  // 'grid-template-columns'
  columns?: Property.GridTemplateColumns
}

type GridTemplateRowsCSS = {
  // 'grid-template-rows'
  rows?: Property.GridTemplateRows
}

type GridTemplateAreasCSS = {
  // 'grid-template-areas'
  areas?: Property.GridTemplateAreas
}

type GridTemplateCSS = {
  // 'grid-template'
  template?: Property.GridTemplate
}

type GridGapCSS =
  | {
      // 'grid-gap' or 'gap'
      gap?: Property.Gap
      gridGap?: never
    }
  | {
      // 'grid-gap' or 'gap'
      gap?: never
      gridGap?: Property.Gap
    }

type GridColumnGapCSS = {
  // 'column-gap'
  columnGap?: Property.ColumnGap
}

type GridRowGapCSS = {
  // 'row-gap'
  rowGap?: Property.RowGap
}

type JustifyItemsCSS =
  | {
      // 'justify-items' short
      justifyItemsStart?: boolean
      justifyItemsEnd?: boolean
      justifyItemsCenter?: boolean
      justifyItemsStretch?: boolean
      justifyItems?: never
    }
  | {
      // 'justify-items' manual
      justifyItemsStart?: never
      justifyItemsEnd?: never
      justifyItemsCenter?: never
      justifyItemsStretch?: never
      justifyItems?: Property.JustifyItems
    }

type AlignItemsCSS =
  | {
      // 'align-items' short
      alignItemsStart?: boolean
      alignItemsEnd?: boolean
      alignItemsCenter?: boolean
      alignItemsStretch?: boolean
      alignItems?: never
    }
  | {
      // 'align-items' manual
      alignItemsStart?: never
      alignItemsEnd?: never
      alignItemsCenter?: never
      alignItemsStretch?: never
      alignItems?: Property.AlignItems
    }

type PlaceItemsCSS = {
  // 'place-items'
  placeItems?: Property.PlaceItems
}

type JustifyContentCSS =
  | {
      // 'justify-content' short
      justifyContentStart?: boolean
      justifyContentEnd?: boolean
      justifyContentCenter?: boolean
      justifyContentStretch?: boolean
      justifyContentSpaceAround?: boolean
      justifyContentSpaceBetween?: boolean
      justifyContentSpaceEvenly?: boolean
      justifyContent?: never
    }
  | {
      // 'justify-content' manual
      justifyContentStart?: never
      justifyContentEnd?: never
      justifyContentCenter?: never
      justifyContentStretch?: never
      justifyContentSpaceAround?: never
      justifyContentSpaceBetween?: never
      justifyContentSpaceEvenly?: never
      justifyContent?: Property.JustifyContent
    }

type AlignContentCSS =
  | {
      // 'align-content' short
      alignContentStart?: boolean
      alignContentEnd?: boolean
      alignContentCenter?: boolean
      alignContentStretch?: boolean
      alignContentSpaceAround?: boolean
      alignContentSpaceBetween?: boolean
      alignContentSpaceEvenly?: boolean
      alignContent?: never
    }
  | {
      // 'align-content' manual
      alignContentStart?: never
      alignContentEnd?: never
      alignContentCenter?: never
      alignContentStretch?: never
      alignContentSpaceAround?: never
      alignContentSpaceBetween?: never
      alignContentSpaceEvenly?: never
      alignContent?: Property.AlignContent
    }

type PlaceContentCSS = {
  // 'place-content'
  placeContent?: Property.PlaceContent
}

type GridAutoFlowCSS =
  | {
      // 'grid-auto-flow' short
      autoFlowRow?: boolean
      autoFlowColumn?: boolean
      autoFlowDense?: boolean
      autoFlow?: never
    }
  | {
      // 'grid-auto-flow' manual
      autoFlowRow?: never
      autoFlowColumn?: never
      autoFlowDense?: never
      autoFlow?: Property.GridAutoFlow
    }

type GridAutoRowsCSS = {
  // 'grid-auto-rows'
  autoRows?: Property.GridAutoRows
}

type GridAutoColumnsCSS = {
  // 'grid-auto-columns'
  autoColumns?: Property.GridAutoColumns
}

type GridColumnStartCSS = {
  // 'grid-column-start'
  columnStart?: Property.GridColumnStart
}

type GridColumnEndCSS = {
  // 'grid-column-end'
  columnEnd?: Property.GridColumnEnd
}

type GridRowStartCSS = {
  // 'grid-row-start'
  rowStart?: Property.GridRowStart
}

type GridRowEndCSS = {
  // 'grid-row-end'
  rowEnd?: Property.GridRowEnd
}

type GridRowCSS = {
  // 'grid-row'
  row?: Property.GridRow
}

type GridColumnCSS = {
  // 'grid-column'
  column?: Property.GridColumn
}

type GridAreaCSS = {
  // 'grid-area'
  area?: Property.GridArea
}

type JustifySelfCSS =
  | {
      // 'justify-self' short
      justifySelfStart?: boolean
      justifySelfEnd?: boolean
      justifySelfCenter?: boolean
      justifySelfStretch?: boolean
      justifySelf?: never
    }
  | {
      // 'justify-self' manual
      justifySelfStart?: never
      justifySelfEnd?: never
      justifySelfCenter?: never
      justifySelfStretch?: never
      justifySelf?: Property.JustifySelf
    }

type AlignSelfCSS =
  | {
      // 'align-self' short
      alignSelfStart?: boolean
      alignSelfEnd?: boolean
      alignSelfCenter?: boolean
      alignSelfStretch?: boolean
      alignSelf?: never
    }
  | {
      // 'align-self' manual
      alignSelfStart?: never
      alignSelfEnd?: never
      alignSelfCenter?: never
      alignSelfStretch?: never
      alignSelf?: Property.AlignSelf
    }

type PlaceSelfCSS = {
  // 'place-self'
  placeSelf?: Property.PlaceSelf
}

export type ContainerTags = Pick<
  JSX.IntrinsicElements,
  'div' | 'nav' | 'main' | 'aside' | 'article' | 'header' | 'section' | 'footer'
>

type TagName = {
  // as property for change default div to any html tags
  as?: keyof ContainerTags
}

export type GridContainerProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> &
  DisplayCSS &
  GridTemplateColumnsCSS &
  GridTemplateRowsCSS &
  GridTemplateAreasCSS &
  GridTemplateCSS &
  GridGapCSS &
  GridColumnGapCSS &
  GridRowGapCSS &
  JustifyItemsCSS &
  AlignItemsCSS &
  PlaceItemsCSS &
  JustifyContentCSS &
  AlignContentCSS &
  PlaceContentCSS &
  GridAutoFlowCSS &
  GridAutoRowsCSS &
  GridAutoColumnsCSS &
  TagName

export type GridItemProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> &
  GridColumnStartCSS &
  GridColumnEndCSS &
  GridRowStartCSS &
  GridRowEndCSS &
  GridRowCSS &
  GridColumnCSS &
  GridAreaCSS &
  JustifySelfCSS &
  AlignSelfCSS &
  PlaceSelfCSS &
  TagName
