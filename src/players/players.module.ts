import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player } from './entities/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Championship } from 'src/championship/entities/championship.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Player,Championship])],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
