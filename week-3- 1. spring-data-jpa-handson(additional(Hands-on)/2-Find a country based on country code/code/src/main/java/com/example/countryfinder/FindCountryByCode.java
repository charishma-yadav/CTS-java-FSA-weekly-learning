package com.example.countryfinder;
import java.util.HashMap;
import java.util.Scanner;

public class FindCountryByCode {
    public static void main(String[] args) {
        HashMap<String, String> countryMap = new HashMap<>();
        countryMap.put("US", "United States");
        countryMap.put("IN", "India");
        countryMap.put("FR", "France");
        countryMap.put("DE", "Germany");
        countryMap.put("JP", "Japan");
        countryMap.put("CN", "China");
        countryMap.put("BR", "Brazil");
        countryMap.put("ZA", "South Africa");

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter country code (e.g., US): ");
        String code = scanner.nextLine().toUpperCase();

        String country = countryMap.get(code);
        if (country != null) {
            System.out.println("Country name: " + country);
        } else {
            System.out.println("Country code not found.");
        }
        scanner.close();
    }
}
