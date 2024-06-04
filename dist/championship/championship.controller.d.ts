import { ChampionshipService } from './championship.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
export declare class ChampionshipController {
    private readonly championshipService;
    constructor(championshipService: ChampionshipService);
    create(createChampionshipDto: CreateChampionshipDto): Promise<import("./entities/championship.entity").Championship>;
    findAll(): Promise<import("./entities/championship.entity").Championship[]>;
    findOne(id: string): Promise<import("./entities/championship.entity").Championship>;
    update(id: string, updateChampionshipDto: UpdateChampionshipDto): Promise<import("./entities/championship.entity").Championship>;
    remove(id: string): string;
}
