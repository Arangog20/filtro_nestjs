import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsNumber()
    @IsOptional()
    @ApiProperty({
        name: 'id',
        type:'number',
        required: false,
        example: '85',
        description: 'id player',
      })
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        name: 'name',
        type:'string',
        required: true,
        example: 'manuelag',
        description: 'player name',
      })
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        name: 'score',
        type:'number',
        required: true,
        example: '5',
        description: 'player score',
      })
    score: number;
}

