"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const overlapping_1 = require("../helpers/overlapping");
const trim_1 = require("../helpers/trim");
function GridContainer({ inline, columns, rows, areas, template, gap, gridGap, columnGap, rowGap, justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch, justifyItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsStretch, alignItems, placeItems, justifyContentStart, justifyContentEnd, justifyContentCenter, justifyContentStretch, justifyContentSpaceAround, justifyContentSpaceBetween, justifyContentSpaceEvenly, justifyContent, alignContentStart, alignContentEnd, alignContentCenter, alignContentStretch, alignContentSpaceAround, alignContentSpaceBetween, alignContentSpaceEvenly, alignContent, placeContent, autoFlowRow, autoFlowColumn, autoFlowDense, autoFlow, autoRows, autoColumns, style = {}, children, ...rest }) {
    const displayStyle = react_1.default.useMemo(() => ({
        display: inline ? 'inline-grid' : 'grid',
    }), [inline]);
    const gridTemplateColumnsStyle = react_1.default.useMemo(() => ({
        gridTemplateColumns: columns,
    }), [columns]);
    const gridTemplateRowsStyle = react_1.default.useMemo(() => ({
        gridTemplateRows: rows,
    }), [rows]);
    const gridTemplateAreasStyle = react_1.default.useMemo(() => ({
        gridTemplateAreas: areas,
    }), [areas]);
    const gridTemplateStyle = react_1.default.useMemo(() => ({
        gridTemplate: template,
    }), [template]);
    const gridGapStyle = react_1.default.useMemo(() => ({
        gap: gap || gridGap,
        gridGap: gap || gridGap,
    }), [gap, gridGap]);
    const gridColumnGapStyle = react_1.default.useMemo(() => ({
        columnGap,
        gridColumnGap: columnGap,
    }), [columnGap]);
    const gridRowGapStyle = react_1.default.useMemo(() => ({
        rowGap,
        gridRowGap: rowGap,
    }), [rowGap]);
    const justifyItemsStyle = react_1.default.useMemo(() => {
        if (justifyItems)
            return { justifyItems };
        overlapping_1.checkOverlapping('justify-items', justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch);
        let value = null;
        if (justifyItemsStart)
            value = 'start';
        else if (justifyItemsEnd)
            value = 'end';
        else if (justifyItemsCenter)
            value = 'center';
        else if (justifyItemsStretch)
            value = 'stretch';
        return value ? { justifyItems: value } : {};
    }, [justifyItems, justifyItemsStart, justifyItemsEnd, justifyItemsCenter, justifyItemsStretch]);
    const alignItemsStyle = react_1.default.useMemo(() => {
        if (alignItems)
            return { alignItems };
        overlapping_1.checkOverlapping('align-items', alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsStretch);
        let value = null;
        if (alignItemsStart)
            value = 'start';
        else if (alignItemsEnd)
            value = 'end';
        else if (alignItemsCenter)
            value = 'center';
        else if (alignItemsStretch)
            value = 'stretch';
        return value ? { alignItems: value } : {};
    }, [alignItems, alignItemsStart, alignItemsEnd, alignItemsCenter, alignItemsStretch]);
    const placeItemsStyle = react_1.default.useMemo(() => ({
        placeItems,
    }), [placeItems]);
    const justifyContentStyle = react_1.default.useMemo(() => {
        if (justifyContent)
            return { justifyContent };
        overlapping_1.checkOverlapping('justify-content', justifyContentStart, justifyContentEnd, justifyContentCenter, justifyContentStretch, justifyContentSpaceAround, justifyContentSpaceBetween, justifyContentSpaceEvenly);
        let value = null;
        if (justifyContentStart)
            value = 'start';
        else if (justifyContentEnd)
            value = 'end';
        else if (justifyContentCenter)
            value = 'center';
        else if (justifyContentStretch)
            value = 'stretch';
        else if (justifyContentSpaceAround)
            value = 'space-around';
        else if (justifyContentSpaceBetween)
            value = 'space-between';
        else if (justifyContentSpaceEvenly)
            value = 'space-evenly';
        return value ? { justifyContent: value } : {};
    }, [
        justifyContent,
        justifyContentStart,
        justifyContentEnd,
        justifyContentCenter,
        justifyContentStretch,
        justifyContentSpaceAround,
        justifyContentSpaceBetween,
        justifyContentSpaceEvenly,
    ]);
    const alignContentStyle = react_1.default.useMemo(() => {
        if (alignContent)
            return { alignContent };
        overlapping_1.checkOverlapping('align-content', alignContentStart, alignContentEnd, alignContentCenter, alignContentStretch, alignContentSpaceAround, alignContentSpaceBetween, alignContentSpaceEvenly);
        let value = null;
        if (alignContentStart)
            value = 'start';
        else if (alignContentEnd)
            value = 'end';
        else if (alignContentCenter)
            value = 'center';
        else if (alignContentStretch)
            value = 'stretch';
        else if (alignContentSpaceAround)
            value = 'space-around';
        else if (alignContentSpaceBetween)
            value = 'space-between';
        else if (alignContentSpaceEvenly)
            value = 'space-evenly';
        return value ? { alignContent: value } : {};
    }, [
        alignContent,
        alignContentStart,
        alignContentEnd,
        alignContentCenter,
        alignContentStretch,
        alignContentSpaceAround,
        alignContentSpaceBetween,
        alignContentSpaceEvenly,
    ]);
    const placeContentStyle = react_1.default.useMemo(() => ({
        placeContent,
    }), [placeContent]);
    const gridAutoFlowStyle = react_1.default.useMemo(() => {
        if (autoFlow)
            return { gridAutoFlow: autoFlow };
        overlapping_1.checkOverlapping('grid-auto-flow', autoFlowRow, autoFlowColumn, autoFlowDense);
        let value = null;
        if (autoFlowRow)
            value = 'row';
        else if (autoFlowColumn)
            value = 'column';
        else if (autoFlowDense)
            value = 'dense';
        return value ? { gridAutoFlow: value } : {};
    }, [autoFlow, autoFlowRow, autoFlowColumn, autoFlowDense]);
    const gridAutoRowsStyle = react_1.default.useMemo(() => ({
        gridAutoRows: autoRows,
    }), [autoRows]);
    const gridAutoColumnsStyle = react_1.default.useMemo(() => ({
        gridAutoColumns: autoColumns,
    }), [autoColumns]);
    const combinedStyle = trim_1.trimUndefined({
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
    });
    return (react_1.default.createElement("div", Object.assign({ style: combinedStyle }, rest), children));
}
exports.default = GridContainer;
