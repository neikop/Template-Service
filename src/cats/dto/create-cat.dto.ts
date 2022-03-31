import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

export class FindOneParams {
  @IsNumberString()
  id: number;
}
