"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function GridItem({ style = {}, children, ...rest }) {
    return (react_1.default.createElement("div", Object.assign({ style: {
            ...style,
        } }, rest), children));
}
exports.default = GridItem;
