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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChampionshipDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateChampionshipDto {
}
exports.CreateChampionshipDto = CreateChampionshipDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        name: 'id',
        type: 'number',
        required: false,
        example: '85',
        description: 'id championship',
    }),
    __metadata("design:type", Number)
], CreateChampionshipDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: 'name',
        type: 'string',
        required: true,
        example: 'olimpicos2',
        description: 'name of the championship',
    }),
    __metadata("design:type", String)
], CreateChampionshipDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: 'category',
        type: 'string',
        required: true,
        example: 'soccer',
        description: 'category os the shampionship',
    }),
    __metadata("design:type", String)
], CreateChampionshipDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        name: 'playerId',
        type: 'number',
        required: true,
        example: '85',
        description: 'players id ',
    }),
    __metadata("design:type", Number)
], CreateChampionshipDto.prototype, "playerId", void 0);
//# sourceMappingURL=create-championship.dto.js.map