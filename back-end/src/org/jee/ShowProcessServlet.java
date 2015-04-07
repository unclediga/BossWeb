package org.jee;

import winutils.ProcessInfo;
import winutils.WinService;
import winutils.WinUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 *
 */
public class ShowProcessServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>BEGIN Processes:</h2>");
        out.println("<ul>");

        WinService service =  WinUtils.getService();
        ProcessInfo[] procs = service.getProcessList("chrome.exe");
        for (int i = 0; i < procs.length; i++) {
            out.println("<li>" + procs[i] + "</li>");
        }

        out.println("<ul>");
        out.println("<h2>END Processes:</h2>");
        out.println("</body></html>");
        out.close();


    }
}
