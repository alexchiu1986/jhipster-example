export interface IRegion {
    id?: number;
    regionName?: string;
    countriesId?: number;
    countryId?: number;
}

export class Region implements IRegion {
    constructor(public id?: number, public regionName?: string, public countriesId?: number, public countryId?: number) {}
}
