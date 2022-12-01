import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { createUserDto } from './dto/create-user.dto';
import { updateUserdto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async createUser(createUserDto: createUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    return newUser;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getOne(id: number): Promise<User> {
    return this.userRepository.findByPk(id);
  }

  async delete(id: number): Promise<User> {
    const resp = await this.userRepository.findByPk(id);
    if (!resp) {
      throw new HttpException('Id is incorrect', HttpStatus.NOT_FOUND);
    }
    await this.userRepository.destroy({
      where: { id: id },
    });
    return resp;
  }

  async update(id: number, updateuserdto: updateUserdto) {
    const check = await this.userRepository.findByPk(id);
    console.log(check.name)
    if (!check) {
      throw new HttpException('Id is incorrect', HttpStatus.NOT_FOUND);
    }
    // await this.userRepository.update(
    //   {
    //     name: updateuserdto.name || check.name,
    //     email: updateuserdto.email || check.email,
    //     password: updateuserdto.password || check.password,
    //     phone_number: updateuserdto.phone_number || check.phone_number,
    //     location: updateuserdto.location || check.location,
    //   },
    //   { where: { id: id } },
    // );
    await this.userRepository.update({
      ...updateuserdto 
    },{where:{
      id:id
    }})
    return {
      status:200,
      message:'User is updated',
      updatedPerson:check.name
    }
  }
}
