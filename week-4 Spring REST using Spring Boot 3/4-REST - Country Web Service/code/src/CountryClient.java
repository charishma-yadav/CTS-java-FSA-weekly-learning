package com.example.country;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.core.GenericType;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

public class CountryClient {
    private static final String API_URL = "https://restcountries.com/v2/all";

    public List<Country> fetchAll() {
        Client client = ClientBuilder.newClient();
        List<Country> countries = client.target(API_URL)
                .request(MediaType.APPLICATION_JSON)
                .get(new GenericType<>() {});
        client.close();
        return countries;
    }

    public static void main(String[] args) {
        CountryClient client = new CountryClient();
        List<Country> list = client.fetchAll();
        System.out.println("Total countries: " + list.size());
        list.stream().limit(10).forEach(System.out::println);
    }
}
