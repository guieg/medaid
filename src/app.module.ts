import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './role/role.module';

@Module({
  imports: [ConfigModule.forRoot(), RecipeModule, DoctorModule, PatientModule, UserModule, MongooseModule.forRoot(process.env.MONGO_URL), RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
