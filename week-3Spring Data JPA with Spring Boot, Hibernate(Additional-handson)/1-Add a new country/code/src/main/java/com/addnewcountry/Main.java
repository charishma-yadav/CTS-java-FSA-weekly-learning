package com.addnewcountry;

public class Main {
    public static void main(String[] args) {
        CountryManager manager = new CountryManager();
        manager.addCountry(new Country("IN", "India"));
        manager.addCountry(new Country("US", "United States"));
        manager.addCountry(new Country("JP", "Japan"));
        System.out.println("All countries: " + manager.getCountries());
    }
}
