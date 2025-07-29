import java.util.logging.Logger;
import java.util.logging.Level;

public class LoggingExample {
    // Create a logger instance for this class
    private static final Logger logger = Logger.getLogger(LoggingExample.class.getName());

    public static void main(String[] args) {
        logger.info("This is an info message.");
        logger.warning("This is a warning message.");
        logger.severe("This is a severe error message.");

        int a = 10, b = 0;
        try {
            int result = a / b;
            logger.info("Result: " + result);
        } catch (ArithmeticException e) {
            logger.severe("Exception occurred: " + e.getMessage());
        }
    }
}
