package winutils;

/**
 *
 */
public interface WinService {
    /**
     * ������ ��������� ��������� �����
     * @param procName ��� ��������, ������� ���� �������
     * @return ������ PID ���� ��������� ���������
     */
    String[] getProcessList(String procName);

    /**
     * �������� ������� �� ��������� PID
     * @param pid ��������
     * @return true - �� ���, ����� �� �����...
     */
    boolean killProcess(String pid);
}
