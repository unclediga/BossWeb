package winutils;

/**
 *
 */
public class ProcessInfo {
	String handle;
    String caption;
    String commandLine;


    public String getCommandLine() {
        return commandLine;
    }

    public void setCommandLine(String commandLine) {

        this.commandLine = commandLine;
    }


    public String getHandle() {
        return handle;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getIP(){
        //TODO : проверка адреса на корректность
        //TODO : определить хост по адресу
        // CommandLine: frmweb server webfile=HTTP-0,0,1,bk_prod,10.3.42.184

        if(commandLine == null) return "0.0.0.0";
        String ip = "0.0.0.0";
        int idx = commandLine.lastIndexOf(",");
        if (idx == -1) return ip;
        ip = commandLine.substring(idx+1);
        return ip;
    }

    @Override
    public String toString() {
        return "ProcessInfo{" +
                "handle='" + handle + '\'' +
                ", caption='" + caption + '\'' +
                ", commandLine='" + commandLine + '\'' +
                ", ip='" + getIP() + '\'' +
                '}';
    }
}
