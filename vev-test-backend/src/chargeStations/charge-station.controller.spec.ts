
import { Test, TestingModule } from '@nestjs/testing';
import { ChargeStationController } from './charge-station.controller';
import { CreateChargeStationDto } from "./dtos/create-charge-station.dto";
import { ChargeStationService } from "./charge-station.service";

const mockData = [
  {
    name: 'xxex',
    model: 'yyryy',
    power: 9,
    brand: 'xxtx'
  },
  {
    name: 'xxxu',
    model: 'yyyyp',
    power: 10,
    brand: 'xxxm'
  },
  {
    name: 'xxex',
    model: 'ywyyy',
    power: 11,
    brand: 'xxyx'
  },
]

describe('ChargeStations Controller', () => {
  let controller: ChargeStationController;
  let service: ChargeStationService;
  const createChargeStationDto: CreateChargeStationDto = {
    name: 'xxx',
    model: 'yyyy',
    power: 7,
    brand: 'xxx',
  };

  const mockChargeStation = {
    ...createChargeStationDto,
    _id: 'a id',
    inUse: false
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargeStationController],
      providers: [
        {
          provide: ChargeStationService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockData),
            create: jest.fn().mockResolvedValue(createChargeStationDto),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    controller = await module.resolve(ChargeStationController);
    service = await module.resolve(ChargeStationService);
  });

  describe('create()', () => {
    it('should create a new charge station', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(Promise.resolve(mockChargeStation));

      await controller.create(createChargeStationDto);
      expect(createSpy).toHaveBeenCalledWith(createChargeStationDto);
    });
  });
  describe('findAll()', () => {
    it('should return an array of charge stations', async () => {
      expect(controller.list()).resolves.toEqual(mockData);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
