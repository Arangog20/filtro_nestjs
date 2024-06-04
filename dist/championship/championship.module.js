"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionshipModule = void 0;
const common_1 = require("@nestjs/common");
const championship_service_1 = require("./championship.service");
const championship_controller_1 = require("./championship.controller");
const typeorm_1 = require("@nestjs/typeorm");
const championship_entity_1 = require("./entities/championship.entity");
const player_entity_1 = require("../players/entities/player.entity");
let ChampionshipModule = class ChampionshipModule {
};
exports.ChampionshipModule = ChampionshipModule;
exports.ChampionshipModule = ChampionshipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([championship_entity_1.Championship, player_entity_1.Player]),
        ],
        controllers: [championship_controller_1.ChampionshipController],
        providers: [championship_service_1.ChampionshipService],
    })
], ChampionshipModule);
//# sourceMappingURL=championship.module.js.map