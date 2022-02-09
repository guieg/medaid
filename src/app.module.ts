import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RecipeModule, DoctorModule, PatientModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
