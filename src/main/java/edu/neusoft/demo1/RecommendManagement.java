package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class RecommendManagement {


    public List<Recommend> getRecommend() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<Recommend> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  "SELECT BOOKNAME,AUTHOR,PUBLISHINGHOUSE FROM db_lib_recommend;";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Recommend res = new Recommend();
                res.setTitle(resultSet.getString(1));
                res.setAuthor(resultSet.getString(2));
                res.setPublisher(resultSet.getString(3));
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
