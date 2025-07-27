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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSize = exports.padDateTime = exports.padNumber = exports.numberRus = exports.number = exports.intWord = void 0;
const pad_1 = require("./pad");
Object.defineProperty(exports, "padNumber", { enumerable: true, get: function () { return pad_1.padNumber; } });
Object.defineProperty(exports, "padDateTime", { enumerable: true, get: function () { return pad_1.padDateTime; } });
const number_1 = __importStar(require("./number"));
exports.number = number_1.default;
Object.defineProperty(exports, "numberRus", { enumerable: true, get: function () { return number_1.numberRus; } });
const intWord_1 = __importDefault(require("./intWord"));
exports.intWord = intWord_1.default;
const fileSize_1 = __importDefault(require("./fileSize"));
exports.fileSize = fileSize_1.default;
//# sourceMappingURL=index.js.map