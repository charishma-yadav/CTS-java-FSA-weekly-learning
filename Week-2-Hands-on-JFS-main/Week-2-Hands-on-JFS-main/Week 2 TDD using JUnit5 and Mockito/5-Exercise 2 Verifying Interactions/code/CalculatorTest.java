import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    @Test
    public void testPerformAddition_VerifiesInteraction() {
        // Arrange
        CalculatorService mockService = mock(CalculatorService.class);
        when(mockService.add(10, 20)).thenReturn(30);

        Calculator calc = new Calculator(mockService);

        // Act
        int result = calc.performAddition(10, 20);

        // Assert
        assertEquals(30, result);
        verify(mockService).add(10, 20); // Verifies method was called with correct params
    }
}
