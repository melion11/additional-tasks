

type StreetType = {
    title: string;
}

type AddressType = {
    number?: number;
    street: StreetType;
}

type HousesType = {
    buildedAt: number;
    repaired: boolean;
    address: AddressType;
}

type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION';
    budget: number;
    staffCount: number;
    address: AddressType;
}


export type CityType = {
    houses: Array<HousesType>;
    governmentBuildings: Array<GovernmentBuildingsType>;
    citizensNumber: number;
}