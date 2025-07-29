package demo;

public class FactoryPatternDemo {
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

        // Get a Circle and draw it
        Shape shape1 = shapeFactory.getShape("CIRCLE");
        shape1.draw();

        // Get a Rectangle and draw it
        Shape shape2 = shapeFactory.getShape("RECTANGLE");
        shape2.draw();
    }
}
