/// <reference types="react" />
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
  GridAreaProperty,
  PlaceSelfProperty,
} from 'csstype'
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export interface IndexableCSS extends React.CSSProperties {
  [key: string]: string | number | undefined
}
declare type DisplayCSS = {
  inline?: boolean
}
declare type GridTemplateColumnsCSS = {
  columns?: GridTemplateColumnsProperty<string | 0>
}
declare type GridTemplateRowsCSS = {
  rows?: GridTemplateRowsProperty<string | 0>
}
declare type GridTemplateAreasCSS = {
  areas?: GridTemplateAreasProperty
}
declare type GridTemplateCSS = {
  template?: GridTemplateProperty
}
declare type GridGapCSS =
  | {
      gap?: GridGapProperty<string | 0>
      gridGap?: never
    }
  | {
      gap?: never
      gridGap?: GridGapProperty<string | 0>
    }
declare type GridColumnGapCSS = {
  columnGap?: GridColumnGapProperty<string | 0>
}
declare type GridRowGapCSS = {
  rowGap?: GridRowGapProperty<string | 0>
}
declare type JustifyItemsCSS =
  | {
      justifyItemsStart?: boolean
      justifyItemsEnd?: boolean
      justifyItemsCenter?: boolean
      justifyItemsStretch?: boolean
      justifyItems?: never
    }
  | {
      justifyItemsStart?: never
      justifyItemsEnd?: never
      justifyItemsCenter?: never
      justifyItemsStretch?: never
      justifyItems?: JustifyItemsProperty
    }
declare type AlignItemsCSS =
  | {
      alignItemsStart?: boolean
      alignItemsEnd?: boolean
      alignItemsCenter?: boolean
      alignItemsStretch?: boolean
      alignItems?: never
    }
  | {
      alignItemsStart?: never
      alignItemsEnd?: never
      alignItemsCenter?: never
      alignItemsStretch?: never
      alignItems?: AlignItemsProperty
    }
declare type PlaceItemsCSS = {
  placeItems?: PlaceItemsProperty
}
declare type JustifyContentCSS =
  | {
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
      justifyContentStart?: never
      justifyContentEnd?: never
      justifyContentCenter?: never
      justifyContentStretch?: never
      justifyContentSpaceAround?: never
      justifyContentSpaceBetween?: never
      justifyContentSpaceEvenly?: never
      justifyContent?: JustifyContentProperty
    }
declare type AlignContentCSS =
  | {
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
      alignContentStart?: never
      alignContentEnd?: never
      alignContentCenter?: never
      alignContentStretch?: never
      alignContentSpaceAround?: never
      alignContentSpaceBetween?: never
      alignContentSpaceEvenly?: never
      alignContent?: AlignContentProperty
    }
declare type PlaceContentCSS = {
  placeContent?: PlaceContentProperty
}
declare type GridAutoFlowCSS =
  | {
      autoFlowRow?: boolean
      autoFlowColumn?: boolean
      autoFlowDense?: boolean
      autoFlow?: never
    }
  | {
      autoFlowRow?: never
      autoFlowColumn?: never
      autoFlowDense?: never
      autoFlow?: GridAutoFlowProperty
    }
declare type GridAutoRowsCSS = {
  autoRows?: GridAutoRowsProperty<string | 0>
}
declare type GridAutoColumnsCSS = {
  autoColumns?: GridAutoColumnsProperty<string | 0>
}
declare type GridColumnStartCSS = {
  columnStart?: GridColumnStartProperty
}
declare type GridColumnEndCSS = {
  columnEnd?: GridColumnEndProperty
}
declare type GridRowStartCSS = {
  rowStart?: GridRowStartProperty
}
declare type GridRowEndCSS = {
  rowEnd?: GridRowEndProperty
}
declare type GridRowCSS = {
  row?: GridRowProperty
}
declare type GridColumnCSS = {
  column?: GridColumnProperty
}
declare type GridAreaCSS = {
  area?: GridAreaProperty
}
declare type JustifySelfCSS =
  | {
      justifySelfStart?: boolean
      justifySelfEnd?: boolean
      justifySelfCenter?: boolean
      justifySelfStretch?: boolean
      justifySelf?: never
    }
  | {
      justifySelfStart?: never
      justifySelfEnd?: never
      justifySelfCenter?: never
      justifySelfStretch?: never
      justifySelf?: JustifySelfProperty
    }
declare type AlignSelfCSS =
  | {
      alignSelfStart?: boolean
      alignSelfEnd?: boolean
      alignSelfCenter?: boolean
      alignSelfStretch?: boolean
      alignSelf?: never
    }
  | {
      alignSelfStart?: never
      alignSelfEnd?: never
      alignSelfCenter?: never
      alignSelfStretch?: never
      alignSelf?: AlignSelfProperty
    }
declare type PlaceSelfCSS = {
  placeSelf?: PlaceSelfProperty
}
export declare type GridContainerProps = DivProps &
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
export declare type GridItemProps = DivProps &
  GridColumnStartCSS &
  GridColumnEndCSS &
  GridRowStartCSS &
  GridRowEndCSS &
  GridRowCSS &
  GridColumnCSS &
  GridAreaCSS &
  JustifySelfCSS &
  AlignSelfCSS &
  PlaceSelfCSS
export {}
