package demo2;

//File: ECommerceSearch.java

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

//Product class
class Product {
 String name;
 double price;

 Product(String name, double price) {
     this.name = name;
     this.price = price;
 }

 public String toString() {
     return name + " - $" + price;
 }
}

//ECommerceSearch main class
public class ECommerceSearch {

 // Simulate a product catalog
 private static List<Product> getProductCatalog() {
     List<Product> products = new ArrayList<>();
     products.add(new Product("Laptop", 55000.0));
     products.add(new Product("Headphones", 1500.0));
     products.add(new Product("Smartphone", 25000.0));
     products.add(new Product("Keyboard", 700.0));
     products.add(new Product("Charger", 500.0));
     return products;
 }

 // Search logic
 private static List<Product> searchProducts(String keyword, List<Product> products) {
     List<Product> result = new ArrayList<>();
     for (Product p : products) {
         if (p.name.toLowerCase().contains(keyword.toLowerCase())) {
             result.add(p);
         }
     }
     return result;
 }

 public static void main(String[] args) {
     List<Product> catalog = getProductCatalog();

     Scanner scanner = new Scanner(System.in);
     System.out.print("Enter product name to search: ");
     String keyword = scanner.nextLine();

     List<Product> searchResults = searchProducts(keyword, catalog);

     if (searchResults.isEmpty()) {
         System.out.println("No products found.");
     } else {
         System.out.println("Search Results:");
         for (Product p : searchResults) {
             System.out.println(p);
         }
     }

     scanner.close();
 }
}
