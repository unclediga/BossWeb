package winutils;

/**
 *
 */
public interface WinService {
    /**
     * Список процессов заданного имени
     * @param procName Имя процесса, который надо выбрать
     * @return Список PID всех выбранных процессов
     */
    String[] getProcessList(String procName);

    /**
     * грохнуть процесс по заданному PID
     * @param pid процесса
     * @return true - всё гуд, иначе не попал...
     */
    boolean killProcess(String pid);
}
