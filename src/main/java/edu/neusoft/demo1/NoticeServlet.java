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

@WebServlet("/getNoticeData")
public class NoticeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        NoticeManagement noticesql = new NoticeManagement();
        List<Notice> list = noticesql.getNotice();

        JSONArray jsonArray = new JSONArray(list);
        String json = jsonArray.toString();
        response.getWriter().write(json);

    }
}