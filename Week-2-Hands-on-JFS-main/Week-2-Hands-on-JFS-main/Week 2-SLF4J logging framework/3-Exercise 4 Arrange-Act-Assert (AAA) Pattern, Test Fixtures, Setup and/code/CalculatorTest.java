import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    Calculator calc;

    @BeforeEach
    void setUp() {
        calc = new Calculator(); // Setup
    }

    @AfterEach
    void tearDown() {
        calc = null; // Teardown
    }

    @Test
    void testAddition() {
        // Arrange done in setup()

        // Act
        int result = calc.add(2, 3);

        // Assert
        assertEquals(5, result);
    }
}
