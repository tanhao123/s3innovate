import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Building {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    building: string;
    @Column()
    locationName: string;
    @Column()
    locationNumber: string;
    @Column({ type: 'double precision' })
    area: number;
}
