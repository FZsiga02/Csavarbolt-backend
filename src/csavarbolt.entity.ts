/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Rendeles } from './rendeles.entity';

@Entity()
export class Csavarbolt {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipus: string;

    @Column('int')
    hossz: number;

    @Column('int')
    keszlet: number;

    @Column('double')
    ar: number;

    @ManyToOne(() => Rendeles, (rendeles) => rendeles.csavarbolt)
    rendeles: Rendeles
}