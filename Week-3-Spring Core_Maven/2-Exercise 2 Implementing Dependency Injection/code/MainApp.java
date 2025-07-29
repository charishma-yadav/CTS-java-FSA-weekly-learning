package com.example.di;

public class MainApp {
    public static void main(String[] args) {
        // Create service
        MessageService service = new EmailService();

        // Inject service into client
        MessageClient client = new MessageClient(service);

        // Use client
        client.processMessages("Hello Dependency Injection!", "mokshith@example.com");
    }
}
