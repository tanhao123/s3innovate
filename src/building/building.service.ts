import { Injectable, Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Building } from './entities/building.entity';
import { Logger } from 'winston';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buldingRepository: Repository<Building>,
    @Inject('winston') 
    private readonly logger: Logger,
  ) {}


  async create(createBuildingDto: CreateBuildingDto): Promise<Building> {
    const building = new Building();
    building.building = createBuildingDto.building;
    building.locationName = createBuildingDto.locationName;
    building.locationNumber = createBuildingDto.locationNumber;
    building.area = createBuildingDto.area;
    return this.buldingRepository.save(building);
  }

  async findAll() : Promise<Building[]>  {
    ///TODO: test logging only
    this.logger.log('info', 'This is an informational message');
    return this.buldingRepository.find();
  }

  async findOne(id: number) {
    return this.buldingRepository.findOneBy({ id: id });
  }

  async update(id: number, updateBuildingDto: UpdateBuildingDto) {
    await this.buldingRepository.delete(id);
  }

  async remove(id: number) {
    await this.buldingRepository.delete(id);
  }
}
