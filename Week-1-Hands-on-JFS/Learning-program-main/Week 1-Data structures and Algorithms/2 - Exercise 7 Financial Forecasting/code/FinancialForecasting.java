package demo3;

import java.util.Scanner;

public class FinancialForecasting {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input
        System.out.print("Enter initial investment amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual interest rate (in %): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter number of years to forecast: ");
        int years = scanner.nextInt();

        System.out.println("\nYear\tForecasted Amount");

        // Forecast
        for (int i = 1; i <= years; i++) {
            principal = principal * (1 + rate / 100);
            System.out.printf("%d\t%.2f\n", i, principal);
        }

        scanner.close();
    }
}
