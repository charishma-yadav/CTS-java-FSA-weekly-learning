package com.example.country;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Country {
    private String name;
    private String capital;
    private String region;
    private long population;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCapital() { return capital; }
    public void setCapital(String capital) { this.capital = capital; }
    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }
    public long getPopulation() { return population; }
    public void setPopulation(long population) { this.population = population; }

    @Override
    public String toString() {
        return String.format("%s — Capital: %s, Region: %s, Population: %d",
                name, capital, region, population);
    }
}
