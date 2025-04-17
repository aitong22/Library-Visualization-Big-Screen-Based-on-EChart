package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class BorrowingManagement {


    public List<Borrowing> getBorrowing() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<Borrowing> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  " SELECT \n" +
                    "    MONTH(DAYDATE) AS month,\n" +
                    "    SUM(returnedcnt) ,\n" +
                    "    SUM(borrowingcnt) \n" +
                    "FROM\n" +
                    "   db_lib_borrowing\n" +
                    "GROUP BY \n" +
                    "    MONTH(DAYDATE);";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Borrowing res = new Borrowing();
                res.setMonth(resultSet.getString(1));
                res.setReturnedcnt(resultSet.getInt(2));
                res.setBorrowcnt(resultSet.getInt(3));
                list.add(res);
            }
            resultSet.close();
            statement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}