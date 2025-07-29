package com.demo.app;

import com.demo.model.Employee;
import com.demo.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class HQLAndNativeQueryDemo {
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Employee emp1 = new Employee(); emp1.setName("John"); emp1.setSalary(5000);
        Employee emp2 = new Employee(); emp2.setName("Alice"); emp2.setSalary(6000);
        session.save(emp1); session.save(emp2);

        tx.commit();

        List<Employee> employeesHQL = session.createQuery("from Employee", Employee.class).list();
        System.out.println("HQL Query Result:");
        for (Employee e : employeesHQL) {
            System.out.println(e.getId() + " " + e.getName() + " " + e.getSalary());
        }

        List<Object[]> employeesNative = session.createNativeQuery("SELECT id, name, salary FROM employee").list();
        System.out.println("\nNative Query Result:");
        for (Object[] row : employeesNative) {
            System.out.println(row[0] + " " + row[1] + " " + row[2]);
        }

        session.close();
        HibernateUtil.shutdown();
    }
}