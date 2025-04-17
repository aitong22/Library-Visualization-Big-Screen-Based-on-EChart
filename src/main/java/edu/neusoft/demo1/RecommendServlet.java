package edu.neusoft.demo1;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONArray;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/getRecommendData")
public class RecommendServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        RecommendManagement sql = new RecommendManagement();
        List<Recommend> list = sql.getRecommend();

        JSONArray jsonArray = new JSONArray(list);
        String json = jsonArray.toString();
        response.getWriter().write(json);

    }
}