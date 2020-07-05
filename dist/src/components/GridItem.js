"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const overlapping_1 = require("../helpers/overlapping");
function GridItem({ columnStart, columnEnd, column, rowStart, rowEnd, row, area, justifySelfStart, justifySelfEnd, justifySelfCenter, justifySelfStretch, justifySelf, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfStretch, alignSelf, placeSelf, style = {}, children, ...rest }) {
    const gridColumnStartStyle = react_1.default.useMemo(() => ({
        gridColumnStart: columnStart,
    }), [columnStart]);
    const gridColumnEndStyle = react_1.default.useMemo(() => ({
        gridColumnEnd: columnEnd,
    }), [columnEnd]);
    const gridColumnStyle = react_1.default.useMemo(() => ({
        gridColumn: column,
    }), [column]);
    const gridRowStartStyle = react_1.default.useMemo(() => ({
        gridRowStart: rowStart,
    }), [rowStart]);
    const gridRowEndStyle = react_1.default.useMemo(() => ({
        gridRowEnd: rowEnd,
    }), [rowEnd]);
    const gridRowStyle = react_1.default.useMemo(() => ({
        gridRow: row,
    }), [row]);
    const gridAreaStyle = react_1.default.useMemo(() => ({
        gridArea: area,
    }), [area]);
    const justifySelfStyle = react_1.default.useMemo(() => {
        if (justifySelf)
            return { justifySelf };
        overlapping_1.checkOverlapping('justify-self', justifySelfStart, justifySelfEnd, justifySelfCenter, justifySelfStretch);
        let value = null;
        if (justifySelfStart)
            value = 'start';
        else if (justifySelfEnd)
            value = 'end';
        else if (justifySelfCenter)
            value = 'center';
        else if (justifySelfStretch)
            value = 'stretch';
        return value ? { justifySelf: value } : {};
    }, [justifySelf, justifySelfStart, justifySelfEnd, justifySelfCenter, justifySelfStretch]);
    const alignSelfStyle = react_1.default.useMemo(() => {
        if (alignSelf)
            return { alignSelf };
        overlapping_1.checkOverlapping('align-self', alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfStretch);
        let value = null;
        if (alignSelfStart)
            value = 'start';
        else if (alignSelfEnd)
            value = 'end';
        else if (alignSelfCenter)
            value = 'center';
        else if (alignSelfStretch)
            value = 'stretch';
        return value ? { alignSelf: value } : {};
    }, [alignSelf, alignSelfStart, alignSelfEnd, alignSelfCenter, alignSelfStretch]);
    const placeSelfStyle = react_1.default.useMemo(() => ({
        placeSelf,
    }), [placeSelf]);
    return (react_1.default.createElement("div", Object.assign({ style: {
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
        } }, rest), children));
}
exports.default = GridItem;
