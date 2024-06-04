import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TimeAccessGuard } from 'src/guard/access-hour';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @ApiBody({
    type: CreatePlayerDto,
    description: 'Create player using CreatePlayerDto ',
    examples: {
      example1:{
        value:{
          name: 'manuela',
          score: 5,
        }
      }
      
    }
  })
  @ApiOperation({ summary: 'Create a player to the system.', description: 'Create a player to access the system.' })
  @ApiResponse({status: 201, description: 'User created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the user is invalid.'}) 
  @Post()
  @UseGuards(TimeAccessGuard)
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @ApiParam({
    name: 'id',
    type:'number',
    required: true,
    description: 'The ID of the player to be found.',
    examples:{
      example1:{
        value:'1'
      }
    }
  })
  @ApiOperation({ summary: 'Find the user by ID of the system.', description: 'View a specific user registered in the database.' })
  @ApiResponse({status: 200, description: 'User found successfully.',})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a player to the system.', description: 'Update a player of the system.' })
  @ApiResponse({status: 200, description: 'User deleted successfully.'})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the user.'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @ApiOperation({ summary: 'Delete a player to the system.', description: 'Delete a player of the system.' })
  @ApiResponse({status: 200, description: 'User deleted successfully.'})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the user.'})
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.playersService.remove(id);
  }
}
