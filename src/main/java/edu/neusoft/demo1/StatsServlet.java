package edu.neusoft.demo1;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import java.sql.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import java.io.IOException;

@WebServlet("/getStats")
public class StatsServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Connection conn = null;
        try {

            String url = "jdbc:mysql://localhost:3306/library?serverTimezone=UTC";
            String user = "root";
            String password = "root";


            conn = DriverManager.getConnection(url, user, password);


            JSONObject stats = new JSONObject();


            stats.put("inLibrary", getStatValue(conn,
                    "SELECT SUM(USERCNT )\n" +
                            "FROM db_lib_flow\n" +
                            "WHERE DAYDATE = '2025-02-01 08:00:00';"));

            stats.put("dailyBorrow", getStatValue(conn,
                    "SELECT SUM(LENTCNT) FROM db_lib_borrowing WHERE DAYDATE ='2024-09-01 00:00:00';"));


            stats.put("dailyFlow", getStatValue(conn,
                    "SELECT SUM(INFLOW )\n" +
                            "   FROM db_lib_flow\n" +
                            " WHERE DAYDATE >= '2025-02-01 00:00:00' AND DAYDATE < '2025-02-02 00:00:00';"));

            stats.put("dailyReturn", getStatValue(conn,
                    "SELECT SUM(RETURNEDCNT )\n" +
                            "   FROM db_lib_borrowing\n" +
                            " WHERE DAYDATE >= '2024-09-01 00:00:00' AND DAYDATE < '2024-09-02 00:00:00';"));

            stats.put("semesterFlow", getStatValue(conn,
                    "SELECT SUM(INFLOW )\n" +
                            "   FROM db_lib_flow;"));

            stats.put("semesterEntry", getStatValue(conn,
                    "SELECT SUM( LENTCNT)\n" +
                            "   FROM db_lib_borrowing;"));

            response.setContentType("application/json");
            response.getWriter().write(stats.toString());

        } catch (SQLException e) {
            e.printStackTrace();
            response.sendError(500, "数据库连接错误");
        } finally {
            if(conn != null) try { conn.close(); } catch(SQLException e) {}
        }
    }

    private int getStatValue(Connection conn, String sql) throws SQLException {
        try (PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            return rs.next() ? rs.getInt(1) : 0;
        }
    }
}
