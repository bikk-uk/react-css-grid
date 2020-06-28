"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const react_1 = __importDefault(require("react"));
class Grid extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", Object.assign({}, this.props));
    }
}
exports.Grid = Grid;
Grid.Item = (react_1.default.createElement("div", null));
exports.default = Grid;
