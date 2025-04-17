package edu.neusoft.demo1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class TypeSumsql {
    public List<TypeSum> getTypeSum() {
        // 数据库连接信息
        String url = "jdbc:mysql://localhost:3306/keshihua?serverTimezone=UTC";
        String username = "root";
        String password = "root";
        List<TypeSum> list = new ArrayList<>();

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);
            Statement statement = connection.createStatement();
            String query =  "SELECT \n" +
                    "    pt.TYPENAME,\n" +
                    "    ROUND(SUM(od.unitprice * od.quantity * od.discount)) AS SUM\n" +
                    "FROM \n" +
                    "    orders o\n" +
                    "JOIN \n" +
                    "    order_detail od ON o.orderid = od.orderid\n" +
                    "JOIN \n" +
                    "    product p ON od.productid = p.product_id\n" +
                    "JOIN \n" +
                    "    producttype pt ON p.type = pt.typeid\n" +
                    "GROUP BY \n" +
                    "    pt.TYPENAME;";
            String query2 ="SELECT \n" +
                    "    cu.REGION,\n" +
                    "    ROUND(SUM(od.unitprice * od.quantity * od.discount)) AS SUM\n" +
                    "FROM \n" +
                    "    orders o\n" +
                    "JOIN \n" +
                    "    order_detail od ON o.orderid = od.orderid\n" +
                    "JOIN \n" +
                    "    customer cu ON cu.CUSTOMER_ID = o.CUSTOMERID\n" +
                    "\n" +
                    "\n" +
                    "GROUP BY \n" +
                    "    cu.REGION;";
            ResultSet resultSet = statement.executeQuery(query2);

            while (resultSet.next()) {
                TypeSum res = new TypeSum();
                res.setType(resultSet.getString(1));
                res.setSum(resultSet.getInt(2));
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
