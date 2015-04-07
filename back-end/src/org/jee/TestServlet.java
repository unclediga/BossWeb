package org.jee;

import java.io.IOException;
import java.io.PrintWriter;

/**
 *
 */
public class TestServlet extends javax.servlet.http.HttpServlet {

    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<HTML><BODY>Hello from servlet!</HTML></BODY>");
        out.close();
    }
}
