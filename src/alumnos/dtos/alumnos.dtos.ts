import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsMongoId,
  IsDateString,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class AlumnoDto {

  @IsMongoId()
  @IsNotEmpty()
  readonly usuarioId: string;

  @IsMongoId()
  @IsNotEmpty()
  readonly generacionId: string;

  @IsString()
  @IsNotEmpty()
  readonly modalidad: string;

  @IsString()
  @IsNotEmpty()
  readonly grupo: string;

  @IsString()
  @IsNotEmpty()
  readonly estatus: string;

  @IsNumber()
  @IsNotEmpty()
  readonly promedioGeneral: number;

  @IsNumber()
  @IsNotEmpty()
  readonly creditosAcumulados: number;

  @IsDateString()
  @IsNotEmpty()
  readonly fechaIngreso: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly fechaEgreso: Date;
}

export class UpdateAlumnoDto extends PartialType(AlumnoDto) {}
