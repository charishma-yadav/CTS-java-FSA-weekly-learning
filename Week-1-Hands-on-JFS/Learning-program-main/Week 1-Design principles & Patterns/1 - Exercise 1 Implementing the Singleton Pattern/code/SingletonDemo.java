package demo;

public class SingletonDemo {

    // Inner Singleton class
    static class Singleton {
        // Static variable to hold one instance
        private static Singleton instance;

        // Private constructor to prevent instantiation
        private Singleton() {
            System.out.println("Singleton instance created.");
        }

        // Public method to provide access to the instance
        public static Singleton getInstance() {
            if (instance == null) {
                instance = new Singleton();
            }
            return instance;
        }

        public void displayMessage() {
            System.out.println("Hello from Singleton instance!");
        }
    }

    // Main method to test the Singleton
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        s1.displayMessage();

        Singleton s2 = Singleton.getInstance();
        s2.displayMessage();

        // Check if both objects are same
        System.out.println("Are both instances same? " + (s1 == s2));
    }
}
