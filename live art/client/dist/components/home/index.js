"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const text_input_1 = require("../text-input");
require("./index.scss");
const Home = () => {
    const [page, setPage] = React.useState("");
    const nav = (0, react_router_dom_1.useNavigate)();
    return (React.createElement("div", { className: "frame home" },
        React.createElement("div", { className: "button", onClick: () => nav("/editor") }, "Editor"),
        React.createElement("div", { className: "button", onClick: () => nav("/settings") }, "Settings"),
        React.createElement("div", { className: "spacer" }),
        React.createElement("div", { className: "view" },
            React.createElement(text_input_1.TextInput, { value: page, onChange: setPage, placeholder: "happy-green-whale" }),
            React.createElement("div", { className: "button", onClick: () => nav(`/drawing/${page}`) }, "Join Stream")),
        React.createElement("div", { className: "spacer" }),
        React.createElement("div", { className: "button", onClick: () => nav("/link-submission") }, "Like LiveArt? Send me fan mail!")));
};
exports.Home = Home;
