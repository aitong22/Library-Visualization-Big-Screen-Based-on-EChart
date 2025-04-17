package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class HotManagement {
    public List<Hot> getHot() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<Hot> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  "SELECT BOOKNAME,LENTCNT FROM db_lib_hot ORDER BY LENTCNT DESC LIMIT 8 ;";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Hot res = new Hot();
                res.setBookname(resultSet.getString(1));
                res.setBowrrowcnt(resultSet.getInt(2));
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