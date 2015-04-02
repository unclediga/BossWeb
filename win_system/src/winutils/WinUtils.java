package winutils;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.Dispatch;
import com.jacob.com.EnumVariant;
import com.jacob.com.Variant;
import com.jacob.com.ComThread;

import java.util.ArrayList;
import java.util.Arrays;

public class WinUtils implements WinService{

	private static WinService service;

	/**
	 * example run loop method called by main()
	 */
	public static WinService getService(){
		if(service == null){
			service = new WinUtils();
		}
		return service;
	}

	@Override
	public String[] getProcessList(String procName) {

		ArrayList<String> processList = new ArrayList<String>(1);

		if(procName == null) return new String[0];

		ComThread.InitSTA();

		ActiveXComponent wmi = null;
		wmi = new ActiveXComponent("WbemScripting.SWbemLocator");
		// no connection parameters means to connect to the local machine
		Variant conRet = wmi.invoke("ConnectServer");
		// the author liked the ActiveXComponent api style over the Dispatch
		// style
		ActiveXComponent wmiconnect = new ActiveXComponent(conRet.toDispatch());

		// the WMI supports a query language.

		String query = "select ProcessId, CommandLine, Caption  "
				+ "from Win32_Process "
				+ "where Caption = '" + procName + "'";
		Variant vCollection = wmiconnect
				.invoke("ExecQuery", new Variant(query));

		EnumVariant enumVariant = new EnumVariant(vCollection.toDispatch());

		String resultString = "";
		Dispatch item = null;

		while (enumVariant.hasMoreElements()) {
			resultString = "";
			item = enumVariant.nextElement().toDispatch();

			String processidString = Dispatch.call(item, "ProcessId")
					.toString();
			String commandLineString = Dispatch.call(item, "CommandLine").toString();
			String caption = Dispatch.call(item, "Caption")
					.toString();
			resultString += processidString + "\n" + caption;// + "\n" +commandLineString;
			processList.add(resultString);
		}

		ComThread.Release();


		return processList.toArray(new String[0]);

	}

	@Override
	public boolean killProcess(String pid) {

		ComThread.InitSTA();

		ActiveXComponent wmi = null;
		wmi = new ActiveXComponent("WbemScripting.SWbemLocator");
		// no connection parameters means to connect to the local machine
		Variant conRet = wmi.invoke("ConnectServer");
		// the author liked the ActiveXComponent api style over the Dispatch
		// style
		ActiveXComponent wmiconnect = new ActiveXComponent(conRet.toDispatch());
		Variant procs = wmiconnect.invoke("InstancesOf", new Variant("Win32_Process"));

		EnumVariant procsEnum = new EnumVariant(procs.toDispatch());
		Dispatch proc = null;

		while (procsEnum.hasMoreElements()){
			proc = procsEnum.nextElement().toDispatch();
			System.out.println(proc.call(proc,"Caption").toString());
		}


		ComThread.Release();


		return false;
	}
}
