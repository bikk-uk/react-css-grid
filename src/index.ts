// Libraries
import type {
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
  GridTemplateAreasProperty,
  GridTemplateProperty,
  GridGapProperty,
  GridColumnGapProperty,
  GridRowGapProperty,
  JustifyItemsProperty,
  AlignItemsProperty,
  JustifyContentProperty,
  AlignContentProperty,
  GridAutoFlowProperty,
  PlaceItemsProperty,
  PlaceContentProperty,
  GridAutoRowsProperty,
  GridAutoColumnsProperty,
  GridColumnStartProperty,
  GridColumnEndProperty,
  GridRowEndProperty,
  GridRowStartProperty,
  GridRowProperty,
  GridColumnProperty,
  JustifySelfProperty,
  AlignSelfProperty,
} from 'csstype'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type DisplayCSS = {
  // 'display'
  inline?: boolean
}

type GridTemplateColumnsCSS = {
  // 'grid-template-columns'
  columns?: GridTemplateColumnsProperty<string | 0>
}

type GridTemplateRowsCSS = {
  // 'grid-template-rows'
  rows?: GridTemplateRowsProperty<string | 0>
}

type GridTemplateAreasCSS = {
  // 'grid-template-areas'
  areas?: GridTemplateAreasProperty
}

type GridTemplateCSS = {
  // 'grid-template'
  template?: GridTemplateProperty
}

type GridGapCSS =
  | {
      // 'grid-gap' or 'gap'
      gap?: GridGapProperty<string | 0>
      gridGap?: never
    }
  | {
      // 'grid-gap' or 'gap'
      gap?: never
      gridGap?: GridGapProperty<string | 0>
    }

type GridColumnGapCSS = {
  // 'column-gap'
  columnGap?: GridColumnGapProperty<string | 0>
}

type GridRowGapCSS = {
  // 'row-gap'
  rowGap?: GridRowGapProperty<string | 0>
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
      justifyItems?: JustifyItemsProperty
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
      alignItems?: AlignItemsProperty
    }

type PlaceItemsCSS = {
  // 'place-items'
  placeItems?: PlaceItemsProperty
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
      justifyContent?: JustifyContentProperty
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
      alignContent?: AlignContentProperty
    }

type PlaceContentCSS = {
  // 'place-content'
  placeContent?: PlaceContentProperty
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
      autoFlow?: GridAutoFlowProperty
    }

type GridAutoRowsCSS = {
  // 'grid-auto-rows'
  autoRows?: GridAutoRowsProperty<string | 0>
}

type GridAutoColumnsCSS = {
  // 'grid-auto-columns'
  autoColumns?: GridAutoColumnsProperty<string | 0>
}

type GridColumnStartCSS = {
  // 'grid-column-start'
  columnStart?: GridColumnStartProperty
}

type GridColumnEndCSS = {
  // 'grid-column-end'
  columnEnd?: GridColumnEndProperty
}

type GridRowStartCSS = {
  // 'grid-row-start'
  rowStart?: GridRowStartProperty
}

type GridRowEndCSS = {
  // 'grid-row-end'
  rowEnd?: GridRowEndProperty
}

type GridRowCSS = {
  // 'grid-row'
  row?: GridRowProperty
}

type GridColumnCSS = {
  // 'grid-column'
  column?: GridColumnProperty
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
      justifySelf?: JustifySelfProperty
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
      alignSelf?: AlignSelfProperty
    }

export type GridContainerProps = DivProps &
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
  GridAutoColumnsCSS

export type GridItemProps = DivProps &
  GridColumnStartCSS &
  GridColumnEndCSS &
  GridRowStartCSS &
  GridRowEndCSS &
  GridRowCSS &
  GridColumnCSS &
  JustifySelfCSS &
  AlignSelfCSS
