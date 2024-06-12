import { Min, Max, IsInt, IsNotEmpty, IsNumber, Matches, MaxLength } from "class-validator";


export class CreateChargeStationDto {
  @IsNotEmpty()
  name: string;

  @MaxLength(20, {
    message: 'Brand is too long',
  })
  @Matches(/[a-zA-Z]/g, {
    message: 'Brand must match a-zA-Z',
  })
  @IsNotEmpty()
  brand: string;

  @Matches(/[A-Za-z0-9]/g, {
    message: 'Model must match A-Za-z0-9',
  })
  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(5)
  @Max(22)
  power: number;
}
