public class MathApplication {
    private Calculator calculator;

    public void setCalculator(Calculator calc) {
        this.calculator = calc;
    }

    public double add(double a, double b) {
        return calculator.add(a, b);
    }
}
