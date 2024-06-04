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
exports.ChampionshipService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const championship_entity_1 = require("./entities/championship.entity");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("../players/entities/player.entity");
let ChampionshipService = class ChampionshipService {
    constructor(championRepository, playerRepository) {
        this.championRepository = championRepository;
        this.playerRepository = playerRepository;
    }
    async create(data) {
        const newBook = this.championRepository.create(data);
        const existingBook = await this.championRepository.findOneBy({ name: data.name });
        if (existingBook) {
            throw new common_1.BadRequestException('The champinsship already exists');
        }
        return this.championRepository.save(newBook);
    }
    async findAll() {
        const championships = await this.championRepository.find({ relations: ['players'] });
        if (championships.length === 0) {
            throw new common_1.NotFoundException('There are no championships in the database');
        }
        return championships;
    }
    async findOne(id) {
        const championship = await this.championRepository.findOne({ where: { id }, relations: ['players'] });
        if (!championship) {
            throw new common_1.NotFoundException(`championship #${id} not found`);
        }
        return championship;
    }
    async update(id, changes) {
        const championship = await this.championRepository.findOne({ where: { id }, relations: ['players'] });
        this.championRepository.merge(championship, changes);
        return this.championRepository.save(championship);
    }
    remove(id) {
        const championshipDelete = this.championRepository.findOne({ where: { id } });
        if (!championshipDelete) {
            throw new common_1.BadRequestException(`championship #${id} not exist`);
        }
        else
            (championshipDelete) => {
                this.championRepository.delete(championshipDelete);
            };
        return `This action removes a #${id}`;
    }
};
exports.ChampionshipService = ChampionshipService;
exports.ChampionshipService = ChampionshipService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(championship_entity_1.Championship)),
    __param(1, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ChampionshipService);
//# sourceMappingURL=championship.service.js.map