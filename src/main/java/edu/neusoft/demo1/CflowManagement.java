package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class CflowManagement {
    public List<Cflow> getCflow() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<Cflow> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  " SELECT DEPARTNAME,COUNT(INFLOW) FROM db_lib_flow GROUP BY  DEPARTNAME;";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Cflow res = new Cflow();
                res.setDepartname(resultSet.getString(1));
                res.setCount(resultSet.getInt(2));
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
