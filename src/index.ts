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
  AlignItemsCSS

export type GridItemProps = DivProps
