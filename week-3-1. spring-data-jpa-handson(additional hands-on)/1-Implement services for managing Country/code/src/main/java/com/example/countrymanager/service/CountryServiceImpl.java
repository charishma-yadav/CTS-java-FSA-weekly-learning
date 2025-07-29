package com.example.countrymanager.service;

import com.example.countrymanager.model.Country;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class CountryServiceImpl implements CountryService {
    private List<Country> countries = new ArrayList<>();
    private AtomicLong idCounter = new AtomicLong();

    @Override
    public List<Country> getAllCountries() {
        return countries;
    }

    @Override
    public Country getCountryById(Long id) {
        return countries.stream().filter(c -> c.getId().equals(id)).findFirst().orElse(null);
    }

    @Override
    public Country addCountry(Country country) {
        country.setId(idCounter.incrementAndGet());
        countries.add(country);
        return country;
    }

    @Override
    public Country updateCountry(Long id, Country country) {
        Country existing = getCountryById(id);
        if (existing != null) {
            existing.setName(country.getName());
            existing.setCapital(country.getCapital());
        }
        return existing;
    }

    @Override
    public void deleteCountry(Long id) {
        countries.removeIf(c -> c.getId().equals(id));
    }
}