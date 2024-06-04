
import { Player } from "src/players/entities/player.entity";
import {  Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Championship {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @ManyToOne(() => Player, players => players.championships)
    @JoinColumn({name:'playerId'})
    players: Player;
    
    @Column({nullable: true})
    playerId: number;
}