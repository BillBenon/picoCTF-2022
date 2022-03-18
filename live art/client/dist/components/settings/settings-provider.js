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
exports.SettingsProvider = exports.SettingsContext = void 0;
const React = __importStar(require("react"));
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
exports.SettingsContext = React.createContext({
    settings: { allowViewers: false, username: "" },
    updateSettings: () => { },
});
const SettingsProvider = (props) => {
    const [allowViewers, setAllowViewers] = (0, hooks_1.useLocalStorage)("allow-viewers", false);
    const [username, setUsername] = (0, hooks_1.useLocalStorage)("username", (0, utils_1.generateUsername)());
    const settings = { allowViewers, username };
    const updateSettings = (settings) => {
        if (settings.allowViewers !== undefined) {
            setAllowViewers(settings.allowViewers);
        }
        if (settings.username !== undefined) {
            setUsername(settings.username);
        }
    };
    return (React.createElement(exports.SettingsContext.Provider, { value: { settings, updateSettings } }, props.children));
};
exports.SettingsProvider = SettingsProvider;
