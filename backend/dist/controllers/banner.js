"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var banner_1 = __importDefault(require("../services/banner"));
var config_1 = require("../config");
var fs_1 = __importDefault(require("fs"));
var sequelize_1 = __importDefault(require("sequelize"));
var Op = sequelize_1.default.Op;
// User Panel
var getBanners = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var condition, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                condition = {
                    where: { status: 1 },
                    raw: true
                };
                return [4 /*yield*/, banner_1.default.findAll(condition)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({ success: true, data: result, message: 'Success' })];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json(config_1.BACKEND_ERROR)];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Admin Panel
var getData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, condition, result, e_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                params = req.body.params;
                if (params === undefined) {
                    return [2 /*return*/, res.status(400).json(config_1.BAD_REQUEST)];
                }
                condition = {
                    where: (_a = {},
                        _a[Op.or] = [
                            {
                                title: (_b = {},
                                    _b[Op.like] = "%".concat(params.searchValue, "%"),
                                    _b)
                            }
                        ],
                        _a),
                    order: [[params.column, params.direction]],
                    limit: params.rowsPerPage,
                    offset: (params.currentPage - 1) * params.rowsPerPage
                };
                return [4 /*yield*/, banner_1.default.findAndCountAll(condition)];
            case 1:
                result = _c.sent();
                return [2 /*return*/, res.json({ success: true, message: 'Success', data: result })];
            case 2:
                e_1 = _c.sent();
                console.log('error: ', e_1);
                return [2 /*return*/, res.status(500).json(config_1.BACKEND_ERROR)];
            case 3: return [2 /*return*/];
        }
    });
}); };
var addEvent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, dir, baseImage, index, format, name_1, bannerImage, index, format, name_2, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                data = req.body.data;
                if (data === undefined) {
                    return [2 /*return*/, res.status(400).json(config_1.BAD_REQUEST)];
                }
                data = JSON.parse(data);
                if (!(req.files !== null)) return [3 /*break*/, 4];
                dir = "".concat(__dirname, "/../build");
                if (!fs_1.default.existsSync(dir)) {
                    fs_1.default.mkdirSync(dir);
                }
                if (!fs_1.default.existsSync("".concat(dir, "/uploads"))) {
                    fs_1.default.mkdirSync("".concat(dir, "/uploads"));
                }
                baseImage = req.files.baseImage;
                if (!(baseImage !== undefined)) return [3 /*break*/, 2];
                index = baseImage['name'].lastIndexOf('.');
                format = baseImage['name'].substring(index, baseImage['name'].length);
                name_1 = new Date().getTime().toString() + format;
                return [4 /*yield*/, baseImage.mv("".concat(dir, "/uploads/").concat(name_1))];
            case 1:
                _a.sent();
                data['baseImage'] = '/uploads/' + name_1;
                _a.label = 2;
            case 2:
                bannerImage = req.files.bannerImage;
                if (!(bannerImage !== undefined)) return [3 /*break*/, 4];
                index = bannerImage['name'].lastIndexOf('.');
                format = bannerImage['name'].substring(index, bannerImage['name'].length);
                name_2 = new Date().getTime().toString() + format;
                return [4 /*yield*/, bannerImage.mv("".concat(dir, "/uploads/").concat(name_2))];
            case 3:
                _a.sent();
                data['bannerImage'] = '/uploads/' + name_2;
                _a.label = 4;
            case 4:
                delete data.id;
                return [4 /*yield*/, banner_1.default.create(data)];
            case 5:
                result = _a.sent();
                return [2 /*return*/, res.json({ success: true, message: 'Success', data: result })];
            case 6:
                e_2 = _a.sent();
                console.log('error: ', e_2);
                return [2 /*return*/, res.status(500).json(config_1.BACKEND_ERROR)];
            case 7: return [2 /*return*/];
        }
    });
}); };
var updateEvent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, dir, baseImage, index, format, name_3, bannerImage, index, format, name_4, result, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                data = req.body.data;
                if (data === undefined) {
                    return [2 /*return*/, res.status(400).json(config_1.BAD_REQUEST)];
                }
                data = JSON.parse(data);
                if (!(req.files !== null)) return [3 /*break*/, 4];
                dir = "".concat(__dirname, "/../build");
                if (!fs_1.default.existsSync(dir)) {
                    fs_1.default.mkdirSync(dir);
                }
                if (!fs_1.default.existsSync("".concat(dir, "/uploads"))) {
                    fs_1.default.mkdirSync("".concat(dir, "/uploads"));
                }
                baseImage = req.files.baseImage;
                if (!(baseImage !== undefined)) return [3 /*break*/, 2];
                index = baseImage['name'].lastIndexOf('.');
                format = baseImage['name'].substring(index, baseImage['name'].length);
                name_3 = new Date().getTime().toString() + format;
                return [4 /*yield*/, baseImage.mv("".concat(dir, "/uploads/").concat(name_3))];
            case 1:
                _a.sent();
                data['baseImage'] = '/uploads/' + name_3;
                _a.label = 2;
            case 2:
                bannerImage = req.files.bannerImage;
                if (!(bannerImage !== undefined)) return [3 /*break*/, 4];
                index = bannerImage['name'].lastIndexOf('.');
                format = bannerImage['name'].substring(index, bannerImage['name'].length);
                name_4 = new Date().getTime().toString() + format;
                return [4 /*yield*/, bannerImage.mv("".concat(dir, "/uploads/").concat(name_4))];
            case 3:
                _a.sent();
                data['bannerImage'] = '/uploads/' + name_4;
                _a.label = 4;
            case 4: return [4 /*yield*/, banner_1.default.update(data, { where: { id: data.id } })];
            case 5:
                result = _a.sent();
                return [2 /*return*/, res.json({ success: true, message: 'Success', data: result })];
            case 6:
                e_3 = _a.sent();
                return [2 /*return*/, res.status(500).json(config_1.BACKEND_ERROR)];
            case 7: return [2 /*return*/];
        }
    });
}); };
var deleteEvent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.body.id;
                if (id === undefined) {
                    return [2 /*return*/, res.status(400).json(config_1.BAD_REQUEST)];
                }
                return [4 /*yield*/, banner_1.default.destroy({ where: { id: id } })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.json({ success: true, message: 'Success', data: result })];
            case 2:
                e_4 = _a.sent();
                console.log(e_4);
                return [2 /*return*/, res.status(500).json(config_1.BACKEND_ERROR)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getBanners: getBanners,
    // Admin Panel
    getData: getData,
    addEvent: addEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent,
};
