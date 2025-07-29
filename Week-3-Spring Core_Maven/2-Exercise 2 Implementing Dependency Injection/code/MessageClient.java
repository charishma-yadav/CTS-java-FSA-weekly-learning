package com.example.di;

public class MessageClient {
    private MessageService messageService;

    // Constructor injection
    public MessageClient(MessageService messageService) {
        this.messageService = messageService;
    }

    public void processMessages(String message, String recipient) {
        messageService.sendMessage(message, recipient);
    }
}
