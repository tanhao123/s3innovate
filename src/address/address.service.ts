import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { TreeRepository } from 'typeorm';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DataSource } from 'typeorm';
import { Address } from './entities/address.entity';
import { CustomException } from 'src/custom.exception';

///TODO: This service is for test tree
@Injectable()
export class AddressService {
  private treeRepository: TreeRepository<Address>;

  constructor(
    private dataSource: DataSource
  ) 
  {
     this.treeRepository = this.dataSource.getTreeRepository(Address);
  }

  async create(createAddressDto: CreateAddressDto) {
    ///TODO: build tree for testing
    const a1 = new Address()
    a1.name = "a1"
    await this.treeRepository.manager.save(a1)

    const a11 = new Address()
    a11.name = "a11"
    a11.parent = a1
    await this.treeRepository.manager.save(a11)

    const a12 = new Address()
    a12.name = "a12"
    a12.parent = a1
    await this.treeRepository.manager.save(a12)

    const a111 = new Address()
    a111.name = "a111"
    a111.parent = a11
    await this.treeRepository.manager.save(a111)

    const a112 = new Address()
    a112.name = "a112"
    a112.parent = a11
    await this.treeRepository.manager.save(a112)
  }

  async findAll(): Promise<Address[]> {
    return await this.treeRepository.findTrees();
  }

  async findOne(id: number): Promise<Address> {
    return await this.treeRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    //TODO: just test error handling
    throw new CustomException();
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
