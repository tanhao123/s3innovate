import { IsNotEmpty } from 'class-validator';

export class CreateBuildingDto {
    //TODO: just test validation
    @IsNotEmpty()
    building: string;
    locationName: string;
    locationNumber: string;
    area: number;
}
