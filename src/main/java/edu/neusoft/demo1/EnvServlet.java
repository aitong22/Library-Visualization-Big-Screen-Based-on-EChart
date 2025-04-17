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

@WebServlet("/getEnvData")
public class EnvServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        EnvManagement sql = new EnvManagement();
        List<Env> list = sql.getEnv();

        JSONArray jsonArray = new JSONArray(list);
        String json = jsonArray.toString();
        response.getWriter().write(json);

    }
}
