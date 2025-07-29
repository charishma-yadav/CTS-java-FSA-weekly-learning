public class Calculator {
    private CalculatorService service;

    public Calculator(CalculatorService service) {
        this.service = service;
    }

    public int performAddition(int a, int b) {
        return service.add(a, b);
    }
}
