import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<import("./entities/player.entity").Player>;
    findAll(): Promise<import("./entities/player.entity").Player[]>;
    findOne(id: string): Promise<import("./entities/player.entity").Player>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<import("./entities/player.entity").Player>;
    remove(id: number): string;
}
