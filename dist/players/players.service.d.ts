import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
export declare class PlayersService {
    private playerRepository;
    constructor(playerRepository: Repository<Player>);
    create(data: CreatePlayerDto): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    update(id: number, changes: UpdatePlayerDto): Promise<Player>;
    remove(id: number): string;
}
