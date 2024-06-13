import {VevApiConfiguration} from "../app/vev-api/types";

export const environment: {
  vev: VevApiConfiguration
} = {
  vev: {
    apiRoot: 'http://localhost:3003',
    endpoints: {
      chargeStationList: () => '/charge-stations',
      chargeStationDelete: (station) => `/charge-stations/${station._id}`,
      chargeStationUpdate: (station) => `/charge-stations/${station._id}`,
      chargeStationCreate: () => `/charge-stations`,
    },
  }
};
