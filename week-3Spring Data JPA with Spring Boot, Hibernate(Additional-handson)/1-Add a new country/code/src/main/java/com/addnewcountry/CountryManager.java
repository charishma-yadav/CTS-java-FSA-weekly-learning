package com.addnewcountry;

import java.util.ArrayList;
import java.util.List;

public class CountryManager {
    private List<Country> countries = new ArrayList<>();

    public void addCountry(Country country) {
        countries.add(country);
        System.out.println("Added: " + country);
    }

    public List<Country> getCountries() {
        return countries;
    }
}
