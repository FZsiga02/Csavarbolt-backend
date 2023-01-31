/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Csavarbolt} from './csavarbolt.entity';

@Entity()
export class Rendeles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    csavar_id: number;

    @Column('int')
    db: number;

    @OneToMany(() => Csavarbolt, (csavarbolt) => csavarbolt.rendeles)
    csavarbolt: Csavarbolt[]
}