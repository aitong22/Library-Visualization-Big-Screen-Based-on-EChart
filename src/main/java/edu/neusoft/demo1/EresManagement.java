package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EresManagement {

    public List<Eres> getEres() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<Eres> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  "  SELECT PLATFORM,SUM(VISITS) FROM db_lib_res_access GROUP BY PLATFORM;";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Eres res = new Eres();
                res.setPlatform(resultSet.getString(1));
                res.setVisits(resultSet.getInt(2));
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