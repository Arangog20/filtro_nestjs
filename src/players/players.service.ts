import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) 
    private playerRepository: Repository<Player>,
  ){}
  
  async create(data: CreatePlayerDto) {
    const existingPlayer = await this.playerRepository.findOneBy({name: data.name})
    if (existingPlayer){
      throw new BadRequestException('The players already exists')
    }
    const newPLayer = this.playerRepository.create(data);
    return this.playerRepository.save(newPLayer);
  }

  async findAll() {
    const players = await this.playerRepository.find({ relations: ['championships'] });
    if (players.length === 0) {
        throw new NotFoundException('There are no players in the database');
    }
    return players;
}

  async findOne(id: number) {
    const player = await this.playerRepository.findOne({ where: { id }, relations: ['championships'] });
    if (!player) {
      throw new NotFoundException(`player #${id} not found`);
    }
    return player;
   }

  async update(id: number, changes: UpdatePlayerDto) {
    const player = await this.playerRepository.findOne({ where: { id }, relations: ['championships'] });
    this.playerRepository.merge(player, changes);
    return this.playerRepository.save(player);
 }

 remove(id:number) {
  const playerDelete = this.playerRepository.findOne({ where:{id}});
  if(!playerDelete){
    throw new BadRequestException(`player #${id} not exist`);
  }else (playerDelete)=>{
    this.playerRepository.delete(playerDelete);
  }
  return `This action removes a #${id}`;
 }
}
