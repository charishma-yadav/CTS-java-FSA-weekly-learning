import static org.mockito.Mockito.*;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathApplicationTest {

    @Test
    public void testAdd() {
        // mock the Calculator
        Calculator calc = mock(Calculator.class);

        // stub the add method
        when(calc.add(10.0, 20.0)).thenReturn(30.0);

        // use the mock in MathApplication
        MathApplication app = new MathApplication();
        app.setCalculator(calc);

        // test
        assertEquals(30.0, app.add(10.0, 20.0), 0);
    }
}
