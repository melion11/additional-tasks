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
    title: string;
    houses: Array<HousesType>;
    governmentBuildings: Array<GovernmentBuildingsType>;
    citizensNumber: number;
}


export const addMoneyToBudget = (city: GovernmentBuildingsType, budget: number) => {
   return city.budget + budget;

}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, number:number) => {
    building.staffCount -= number;
}

export const toHireStaff = (building: GovernmentBuildingsType, number:number) => {
    building.staffCount += number;
}