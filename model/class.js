//Class
export class Population {
    constructor(
      id,
      name,
      gender,
      nik,
      birthDate,
      placeOfBirth,
      provinceId,
      CityId,
      districtId
    ) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.nik = nik;
      this.birthDate = birthDate;
      this.placeOfBirth = placeOfBirth;
      this.provinceId = provinceId;
      this.CityId = CityId;
      this.districtId = districtId;
    }
}

export class Nik {
    constructor(
      nikProvinceId,
      nikCityId,
      nikDistrictId,
      nikBirthDate,
      nikRandomDigits
    ) {
      this.nikProvinceId = nikProvinceId;
      this.nikCityId = nikCityId;
      this.nikDistrictId = nikDistrictId;
      this.nikBirthDate = nikBirthDate;
      this.nikRandomDigits = nikRandomDigits;
    }
}
  