<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="winutils.*" %>

<html>
<head>
    <title>Процессы</title>
</head>
<body>

<%
    WinService service = WinUtils.getService();
    ProcessInfo[] process = service.getProcessList("frmweb.exe");

    String[] params = request.getParameterValues("pid");
    if(params != null)
        for (int i = 0; i < params.length; i++) {
            service.killProcess(params[i],"cmd.exe");


%>
   <div style="background-color: red">kill PID <%= params[i]%><br/> </div>
<%
    }
%>
<form action="process.jsp">

    <table>
        <thead>
        <tr>
            <td></td>
            <td>Handle</td>
            <td>Caption</td>
            <td>IP</td>
            <td>Command line</td>
        </tr>
        </thead>
        <tbody>
        <%

            for (int i = 0; i < process.length; i++) {
        %>
        <tr>
            <td><input type="checkbox" name="pid" value="<%= process[i].getHandle() %>"/></td>
            <td><%= process[i].getHandle() %>            </td>
            <td><%= process[i].getCaption() %>            </td>
            <td><%= process[i].getIP() %>                 </td>
            <td><%= process[i].getCommandLine() %>         </td>
        </tr>

        <%
            }


        %>


        </tbody>
    </table>
    <input type="submit" name="killbutton" value="kill"/>
</form>
</body>
</html>
