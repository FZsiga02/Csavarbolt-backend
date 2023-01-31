/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rendeles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    csavar_id: number;

    @Column('int')
    db: number;
}