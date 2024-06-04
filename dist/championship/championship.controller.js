"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionshipController = void 0;
const common_1 = require("@nestjs/common");
const championship_service_1 = require("./championship.service");
const create_championship_dto_1 = require("./dto/create-championship.dto");
const update_championship_dto_1 = require("./dto/update-championship.dto");
const swagger_1 = require("@nestjs/swagger");
let ChampionshipController = class ChampionshipController {
    constructor(championshipService) {
        this.championshipService = championshipService;
    }
    create(createChampionshipDto) {
        return this.championshipService.create(createChampionshipDto);
    }
    findAll() {
        return this.championshipService.findAll();
    }
    findOne(id) {
        return this.championshipService.findOne(+id);
    }
    update(id, updateChampionshipDto) {
        return this.championshipService.update(+id, updateChampionshipDto);
    }
    remove(id) {
        return this.championshipService.remove(+id);
    }
};
exports.ChampionshipController = ChampionshipController;
__decorate([
    (0, swagger_1.ApiBody)({
        type: create_championship_dto_1.CreateChampionshipDto,
        description: 'Create championship using CreateChampionshipDto',
        examples: {
            example1: {
                value: {
                    name: 'olimpicos2001',
                    category: 'soccer',
                }
            }
        }
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Create a championship to the system.', description: 'Create a championchip to access the system.' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'The data entered to create the user is invalid.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_championship_dto_1.CreateChampionshipDto]),
    __metadata("design:returntype", void 0)
], ChampionshipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChampionshipController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        required: true,
        description: 'The ID of the championship to be found.',
        examples: {
            example1: {
                value: '5'
            }
        }
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Find the user by ID of the system.', description: 'View a specific user registered in the database.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found successfully.', }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChampionshipController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a championship to the system.', description: 'Update a championship of the system.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User with the entered ID not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'An internal server error occurred while deleting the championship.' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_championship_dto_1.UpdateChampionshipDto]),
    __metadata("design:returntype", void 0)
], ChampionshipController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a championship to the system.', description: 'Delete a championship of the system.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User with the entered ID not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'An internal server error occurred while deleting the championship.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChampionshipController.prototype, "remove", null);
exports.ChampionshipController = ChampionshipController = __decorate([
    (0, common_1.Controller)('championship'),
    __metadata("design:paramtypes", [championship_service_1.ChampionshipService])
], ChampionshipController);
//# sourceMappingURL=championship.controller.js.map