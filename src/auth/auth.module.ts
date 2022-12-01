import { Module,forwardRef } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports:[
    forwardRef(()=> UsersModule),
    JwtModule.register({
      secret:process.env.PRIVATE_KEY || 'SECRET',
      signOptions:{
        expiresIn:'24h'
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports:[AuthService,JwtModule]
})
export class AuthModule {}
