package edu.neusoft.demo1;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.*;
import java.io.PrintWriter;
import java.util.List;
import java.io.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.json.JSONArray;

@WebServlet("/getdayflowData")
public class DayflowServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        dayflowManagement daysql = new dayflowManagement();
        List<dayflow> list = daysql.getdayflow();

        JSONArray jsonArray = new JSONArray(list);
        String json = jsonArray.toString();
        response.getWriter().write(json);

    }
}