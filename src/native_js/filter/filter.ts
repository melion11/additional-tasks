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


export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)

}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], citizens: number) => {
    buildings = buildings.filter(city => city.staffCount > citizens)
    return buildings
}