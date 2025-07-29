package com.example.querymethods.runner;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.example.querymethods.entity.User;
import com.example.querymethods.repository.UserRepository;

@Component
public class UserQueryRunner implements CommandLineRunner {

    private final UserRepository userRepository;

    public UserQueryRunner(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        userRepository.save(new User("Alice", "alice@example.com"));
        userRepository.save(new User("Bob", "bob@example.com"));
        userRepository.save(new User("Charlie", "charlie@domain.com"));

        System.out.println("\nFind by name 'Alice':");
        List<User> usersByName = userRepository.findByName("Alice");
        usersByName.forEach(System.out::println);

        System.out.println("\nFind emails containing 'example':");
        List<User> usersByEmailKeyword = userRepository.findByEmailContaining("example");
        usersByEmailKeyword.forEach(System.out::println);

        System.out.println("\nFind by name 'Bob' and email 'bob@example.com':");
        List<User> usersByNameAndEmail = userRepository.findByNameAndEmail("Bob", "bob@example.com");
        usersByNameAndEmail.forEach(System.out::println);
    }
}