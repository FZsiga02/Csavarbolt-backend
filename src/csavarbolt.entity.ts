/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}