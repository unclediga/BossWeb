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

        ProcessInfo[] processList = service.getProcessList("cmd.exe");
        assertTrue("No cmd.exe instances in process list!",processList.length > 0);

    }

    public void testKillProcess() throws Exception {
        //TODO: ��-mock-��� ��
        ProcessInfo[] processList = service.getProcessList("cmd.exe");
        for(ProcessInfo process : processList){
            service.killProcess(process.getHandle(),process.getCaption());
        }
        processList = service.getProcessList("cmd.exe");
        // �� ���� CMD.EXE �� ������ ��������!!!
        assertEquals(processList.length,0);

    }


}