package com.example.countrymanager.service;

import com.example.countrymanager.model.Country;
import java.util.List;

public interface CountryService {
    List<Country> getAllCountries();
    Country getCountryById(Long id);
    Country addCountry(Country country);
    Country updateCountry(Long id, Country country);
    void deleteCountry(Long id);
}