package com.orm.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class App {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();

        session.beginTransaction();

        Student student = new Student("John Doe", "Computer Science");
        session.save(student);

        session.getTransaction().commit();
        session.close();

        System.out.println("Student saved successfully!");
    }
}
