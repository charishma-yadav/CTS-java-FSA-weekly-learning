import java.sql.*;

public class CallStoredProcedure {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database"; // Replace with your DB
        String user = "root"; // Your DB username
        String password = "your_password"; // Your DB password

        try {
            // 1. Connect to MySQL
            Connection conn = DriverManager.getConnection(url, user, password);

            // 2. Prepare CallableStatement for the stored procedure
            CallableStatement stmt = conn.prepareCall("{ call getUser() }");

            // 3. Execute the stored procedure
            ResultSet rs = stmt.executeQuery();

            // 4. Display result
            while (rs.next()) {
                System.out.println(rs.getString("message"));
            }

            // 5. Close connections
            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
