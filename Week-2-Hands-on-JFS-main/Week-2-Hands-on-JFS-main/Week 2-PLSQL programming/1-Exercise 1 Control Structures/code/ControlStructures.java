package psql;

public class ControlStructures {

    public static void main(String[] args) {
        int number = 10;

        // If-else statement
        if (number > 0) {
            System.out.println("The number is positive.");
        } else if (number < 0) {
            System.out.println("The number is negative.");
        } else {
            System.out.println("The number is zero.");
        }

        // For loop
        System.out.println("\nFor loop from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // While loop
        System.out.println("\nWhile loop from 5 to 1:");
        int count = 5;
        while (count >= 1) {
            System.out.println("Count: " + count);
            count--;
        }

        // Switch statement
        System.out.println("\nSwitch case example:");
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            default:
                System.out.println("Another day");
                break;
        }
    }
}
