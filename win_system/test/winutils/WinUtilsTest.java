package winutils;

import junit.framework.TestCase;

/**
 *
 */
public class WinUtilsTest extends TestCase {
    private WinService service;

    public void setUp() throws Exception {
        System.out.println("Prepare service...");
        service = WinUtils.getService();
    }

    public void tearDown() throws Exception {
        System.out.println("destroy service");
        service = null;
    }

    public void testGetProcessList() throws Exception {

        String[] processList = service.getProcessList("chrome.exe");
        assertTrue("No chrome.exe instances in process list!",processList.length > 0);

    }

    public void testKillProcess() throws Exception {

        String[] processList = service.getProcessList("cmd.exe");
        assertTrue("Incorrect testing! No cmd.exe instances in process list!",processList.length > 0);
        for(String process : processList){
            service.killProcess(process);
        }
        processList = service.getProcessList("cmd.exe");
        // Ни один CMD.EXE не должен спастись!!!
        assertEquals(processList.length,0);

    }


}