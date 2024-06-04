import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
import { Player } from 'src/players/entities/player.entity';
export declare class ChampionshipService {
    private championRepository;
    private playerRepository;
    constructor(championRepository: Repository<Championship>, playerRepository: Repository<Player>);
    create(data: CreateChampionshipDto): Promise<Championship>;
    findAll(): Promise<Championship[]>;
    findOne(id: number): Promise<Championship>;
    update(id: number, changes: UpdateChampionshipDto): Promise<Championship>;
    remove(id: number): string;
}
