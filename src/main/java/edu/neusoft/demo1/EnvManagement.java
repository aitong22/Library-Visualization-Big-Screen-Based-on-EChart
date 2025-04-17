package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EnvManagement {
    public List<Env> getEnv() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<Env> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  " SELECT CAMPAREA,ROOMID,TEMPERATURE,AIRQUALITY FROM db_lib_environment;";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                Env res = new Env();
                res.setCamparea(resultSet.getString(1));
                res.setRoomid(resultSet.getString(2));
                res.setTemperature(resultSet.getString(3));
                res.setAirquality(resultSet.getString(4));
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

