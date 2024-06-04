"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChampionshipDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_championship_dto_1 = require("./create-championship.dto");
class UpdateChampionshipDto extends (0, mapped_types_1.PartialType)(create_championship_dto_1.CreateChampionshipDto) {
}
exports.UpdateChampionshipDto = UpdateChampionshipDto;
//# sourceMappingURL=update-championship.dto.js.map