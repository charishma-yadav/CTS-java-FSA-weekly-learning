package com.example.querymethods.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.querymethods.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
    List<User> findByEmailContaining(String keyword);
    List<User> findByNameAndEmail(String name, String email);
}