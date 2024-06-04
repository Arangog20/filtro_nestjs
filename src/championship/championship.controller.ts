import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('championship')
export class ChampionshipController {
  constructor(private readonly championshipService: ChampionshipService) {}

  @ApiBody({
    type: CreateChampionshipDto,
    description: 'Create championship using CreateChampionshipDto',
    examples: {
      example1:{
        value:{
          name: 'olimpicos2001',
          category: 'soccer',
        }
      }
      
    }
  })
  @ApiOperation({ summary: 'Create a championship to the system.', description: 'Create a championchip to access the system.' })
  @ApiResponse({status: 201, description: 'User created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the user is invalid.'}) 
  @Post()
  create(@Body() createChampionshipDto: CreateChampionshipDto) {
    return this.championshipService.create(createChampionshipDto);
  }

   @Get()
   findAll() {
     return this.championshipService.findAll();
  }

  @ApiParam({
    name: 'id',
    type:'number',
    required: true,
    description: 'The ID of the championship to be found.',
    examples:{
      example1:{
        value:'5'
      }
    }
  })
  @ApiOperation({ summary: 'Find the user by ID of the system.', description: 'View a specific user registered in the database.' })
  @ApiResponse({status: 200, description: 'User found successfully.',})

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.championshipService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a championship to the system.', description: 'Update a championship of the system.' })
  @ApiResponse({status: 200, description: 'User deleted successfully.'})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the championship.'})

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChampionshipDto: UpdateChampionshipDto) {
    return this.championshipService.update(+id, updateChampionshipDto);
  }

  @ApiOperation({ summary: 'Delete a championship to the system.', description: 'Delete a championship of the system.' })
  @ApiResponse({status: 200, description: 'User deleted successfully.'})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the championship.'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.championshipService.remove(+id);
  }
}
