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
exports.PlayersController = void 0;
const common_1 = require("@nestjs/common");
const players_service_1 = require("./players.service");
const create_player_dto_1 = require("./dto/create-player.dto");
const update_player_dto_1 = require("./dto/update-player.dto");
const swagger_1 = require("@nestjs/swagger");
const access_hour_1 = require("../guard/access-hour");
let PlayersController = class PlayersController {
    constructor(playersService) {
        this.playersService = playersService;
    }
    create(createPlayerDto) {
        return this.playersService.create(createPlayerDto);
    }
    findAll() {
        return this.playersService.findAll();
    }
    findOne(id) {
        return this.playersService.findOne(+id);
    }
    update(id, updatePlayerDto) {
        return this.playersService.update(+id, updatePlayerDto);
    }
    remove(id) {
        return this.playersService.remove(id);
    }
};
exports.PlayersController = PlayersController;
__decorate([
    (0, swagger_1.ApiBody)({
        type: create_player_dto_1.CreatePlayerDto,
        description: 'Create player using CreatePlayerDto ',
        examples: {
            example1: {
                value: {
                    name: 'manuela',
                    score: 5,
                }
            }
        }
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Create a player to the system.', description: 'Create a player to access the system.' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'The data entered to create the user is invalid.' }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(access_hour_1.TimeAccessGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'number',
        required: true,
        description: 'The ID of the player to be found.',
        examples: {
            example1: {
                value: '1'
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
], PlayersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a player to the system.', description: 'Update a player of the system.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User with the entered ID not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'An internal server error occurred while deleting the user.' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_dto_1.UpdatePlayerDto]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a player to the system.', description: 'Delete a player of the system.' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User with the entered ID not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'An internal server error occurred while deleting the user.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "remove", null);
exports.PlayersController = PlayersController = __decorate([
    (0, swagger_1.ApiTags)('players'),
    (0, common_1.Controller)('players'),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersController);
//# sourceMappingURL=players.controller.js.map