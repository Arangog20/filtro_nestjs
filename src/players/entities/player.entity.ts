import { Championship } from "src/championship/entities/championship.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    score: number;

    @OneToMany(() => Championship, championship => championship.players)
    championships: Championship[];
}
