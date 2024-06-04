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
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_entity_1 = require("./entities/player.entity");
const typeorm_2 = require("typeorm");
let PlayersService = class PlayersService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async create(data) {
        const existingPlayer = await this.playerRepository.findOneBy({ name: data.name });
        if (existingPlayer) {
            throw new common_1.BadRequestException('The players already exists');
        }
        const newPLayer = this.playerRepository.create(data);
        return this.playerRepository.save(newPLayer);
    }
    async findAll() {
        const players = await this.playerRepository.find({ relations: ['championships'] });
        if (players.length === 0) {
            throw new common_1.NotFoundException('There are no players in the database');
        }
        return players;
    }
    async findOne(id) {
        const player = await this.playerRepository.findOne({ where: { id }, relations: ['championships'] });
        if (!player) {
            throw new common_1.NotFoundException(`player #${id} not found`);
        }
        return player;
    }
    async update(id, changes) {
        const player = await this.playerRepository.findOne({ where: { id }, relations: ['championships'] });
        this.playerRepository.merge(player, changes);
        return this.playerRepository.save(player);
    }
    remove(id) {
        const playerDelete = this.playerRepository.findOne({ where: { id } });
        if (!playerDelete) {
            throw new common_1.BadRequestException(`player #${id} not exist`);
        }
        else
            (playerDelete) => {
                this.playerRepository.delete(playerDelete);
            };
        return `This action removes a #${id}`;
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlayersService);
//# sourceMappingURL=players.service.js.map