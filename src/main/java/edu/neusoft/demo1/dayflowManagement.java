package edu.neusoft.demo1;

import edu.neusoft.demo1.TypeSum;
import edu.neusoft.demo1.dayflow;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class dayflowManagement {
    public List<dayflow> getdayflow() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<dayflow> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  "   SELECT HOURINDAY, DEPARTNAME, SUM(INFLOW) as sum \n" +
                    "                    FROM db_lib_flow \n" +
                    "                   WHERE DAYDATE >= '2025-02-01 00:00:00' AND DAYDATE < '2025-02-02 00:00:00'\n" +
                    "                    GROUP BY HOURINDAY, DEPARTNAME;";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                dayflow res = new dayflow();
                res.setTime(resultSet.getString(1));
                res.setSum(resultSet.getInt(3));
                res.setDepartname(resultSet.getString(2));
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