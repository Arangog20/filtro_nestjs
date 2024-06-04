import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Championship } from './entities/championship.entity';
import { Repository } from 'typeorm';
import { Player } from 'src/players/entities/player.entity';

@Injectable()
export class ChampionshipService {
  constructor(
    @InjectRepository (Championship) 
    private championRepository: Repository<Championship>,
    @InjectRepository (Player)
    private playerRepository: Repository<Player>
  ){}

  async create(data:CreateChampionshipDto) {
    const newBook = this.championRepository.create(data);
    const existingBook = await this.championRepository.findOneBy({name: data.name})
    if (existingBook){
      throw new BadRequestException('The champinsship already exists')
    }
    
    return this.championRepository.save(newBook);
  }

  async findAll() {
    const championships = await this.championRepository.find({ relations: ['players'] });
    if (championships.length === 0) {
        throw new NotFoundException('There are no championships in the database');
    }
    return championships;
}

   async findOne(id: number) {
    const championship = await this.championRepository.findOne({ where: { id }, relations: ['players'] });
    if (!championship) {
      throw new NotFoundException(`championship #${id} not found`);
    }
    return championship;
   }

   async update(id: number, changes: UpdateChampionshipDto) {
    const championship = await this.championRepository.findOne({ where: { id }, relations: ['players'] });
    this.championRepository.merge(championship ,changes);
    return this.championRepository.save(championship );
 }

 remove(id:number) {
  const championshipDelete = this.championRepository.findOne({ where:{id}});
  if(!championshipDelete){
    throw new BadRequestException(`championship #${id} not exist`);
  }else (championshipDelete)=>{
    this.championRepository.delete(championshipDelete);
  }
  return `This action removes a #${id}`;
 }
}
