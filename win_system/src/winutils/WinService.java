package winutils;

/**
 *
 */
public interface WinService {
    /**
     * ������ ��������� ��������� �����
     * @param procName ��� ��������, ������� ���� �������
     * @return ������ PID,Name ���� ��������� ���������
     */
    ProcessInfo[] getProcessList(String procName);

    /**
     * �������� ������� �� ��������� PID
     * @param pid ��������
     * @return true - �� ���, ����� �� �����...
     */
    boolean killProcess(String pid,String name);
}
