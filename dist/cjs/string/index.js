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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimPrefix = exports.trimSuffix = exports.startsWith = exports.endsWith = exports.titleCase = exports.clearSpaces = exports.upperFirst = exports.trim = exports.stringToArray = exports.padEnd = exports.replaceByTemplate = exports.strtr = exports.pad = exports.pascalCase = exports.camelCase = exports.padStart = void 0;
const pad_1 = __importStar(require("./pad"));
exports.pad = pad_1.default;
Object.defineProperty(exports, "padStart", { enumerable: true, get: function () { return pad_1.padStart; } });
Object.defineProperty(exports, "padEnd", { enumerable: true, get: function () { return pad_1.padEnd; } });
const stringToArray_1 = __importDefault(require("./stringToArray"));
exports.stringToArray = stringToArray_1.default;
const trim_1 = __importDefault(require("./trim"));
exports.trim = trim_1.default;
const upperFirst_1 = __importDefault(require("./upperFirst"));
exports.upperFirst = upperFirst_1.default;
const titleCase_1 = __importDefault(require("./titleCase"));
exports.titleCase = titleCase_1.default;
const clearSpaces_1 = __importDefault(require("./clearSpaces"));
exports.clearSpaces = clearSpaces_1.default;
const endsWith_1 = __importDefault(require("./endsWith"));
exports.endsWith = endsWith_1.default;
const startsWith_1 = __importDefault(require("./startsWith"));
exports.startsWith = startsWith_1.default;
const trimPrefix_1 = __importDefault(require("./trimPrefix"));
exports.trimPrefix = trimPrefix_1.default;
const trimSuffix_1 = __importDefault(require("./trimSuffix"));
exports.trimSuffix = trimSuffix_1.default;
const camelCase_1 = __importStar(require("./camelCase"));
exports.camelCase = camelCase_1.default;
Object.defineProperty(exports, "pascalCase", { enumerable: true, get: function () { return camelCase_1.pascalCase; } });
const strtr_1 = __importStar(require("./strtr"));
exports.strtr = strtr_1.default;
Object.defineProperty(exports, "replaceByTemplate", { enumerable: true, get: function () { return strtr_1.replaceByTemplate; } });
//# sourceMappingURL=index.js.map