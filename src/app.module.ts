import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import {SequelizeModule} from '@nestjs/sequelize'
import {User} from './users/users.model'
import { UsersModule } from './users/users.module';
import {ServeStaticModule} from '@nestjs/serve-static'
import {resolve} from 'path'
import { CommentModule } from './comment/comment.module';
import { EquipmentModule } from './equipment/equipment.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath:resolve(__dirname,'static')
    }),
    SequelizeModule.forRoot({
      dialect:'postgres',
      host:process.env.POSTGRES_HOST,
      port:Number(process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DB ,
      models:[User],
      autoLoadModels:true,
      logging:false
    }),
    UsersModule,
    CommentModule,
    EquipmentModule,
    OrderModule,
  ]
})
export class AppModule {}

