
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString, Matches, Max, MaxLength, Min } from "class-validator";

// Annotations are not inherited : todo find how to inherit. ( extends CreateChargeStationDto )
export class UpdateChargeStationDto {
  @IsNotEmpty()
  name: string;

  @MaxLength(20, {
    message: 'Brand is too long',
  })
  @Matches(RegExp(/^[a-zA-Z]+$/g), {
    message: 'Brand must match a-zA-Z',
  })
  @IsNotEmpty()
  brand: string;

  @Matches(RegExp(/^[A-Za-z0-9]+/g), {
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
  @IsNotEmpty()
  @IsString()
  _id: string;
  @IsBoolean()
  inUse: number;
}
