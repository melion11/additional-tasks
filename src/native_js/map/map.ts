type StreetType = {
    title: string;
}

type AddressType = {
    number?: number;
    street: StreetType;
}

type HousesType = {
    id: number;
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
    title: string;
    houses: Array<HousesType>;
    governmentBuildings: Array<GovernmentBuildingsType>;
    citizensNumber: number;
}


export const getStreetsTitlesOfGovernmentBuildings = (buildings:GovernmentBuildingsType[]) => {
    let streetsNames = buildings.map(building => building.address.street.title)
    return streetsNames;
}

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
    let streetsNames = houses.map(house => house.address.street.title)
    return streetsNames;
}

// export const getStreetsTitlesOfGovernmentBuildings = (city:GovernmentBuildingsType) => {
//     let streetsNames = city.governmentBuildings.map(building => building.address.street)
//     return streetsNames;
// }