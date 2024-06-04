import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, ArrayNotEmpty, ArrayUnique, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateChampionshipDto {
    @IsOptional()
    @IsNumber()
    @ApiProperty({
        name: 'id',
        type:'number',
        required: false,
        example: '85',
        description: 'id championship',
      })
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'name',
        type:'string',
        required: true,
        example: 'olimpicos2',
        description: 'name of the championship',
      })
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'category',
        type:'string',
        required: true,
        example: 'soccer',
        description: 'category os the shampionship',
      })
    category: string;

   @IsNotEmpty()
   @IsNumber()
   @ApiProperty({
    name: 'playerId',
    type:'number',
    required: true,
    example: '85',
    description: 'players id ',
  })
   playerId: number; 
  
}
