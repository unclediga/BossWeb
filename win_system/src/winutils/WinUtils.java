package winutils;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.Dispatch;
import com.jacob.com.EnumVariant;
import com.jacob.com.Variant;
import com.jacob.com.ComThread;

import java.util.ArrayList;

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
	public ProcessInfo[] getProcessList(String procName) {

		ProcessInfo[] testp = new ProcessInfo[2];
		testp[0] = new ProcessInfo();
		testp[0].setHandle("0001");
		testp[0].setCaption("frmweb.exe");
		testp[0].setCommandLine("frmweb server webfile=HTTP-0,0,1,bk_prod,10.3.42.184");
		testp[1] = new ProcessInfo();
		testp[1].setHandle("0002");
		testp[1].setCaption("frmweb.exe");
		testp[1].setCommandLine("frmweb server webfile=HTTP-0,0,1,bk_prod,10.3.42.165");
		return testp;

		/*
		ArrayList<ProcessInfo> processList;
		processList = new ArrayList<ProcessInfo>(0);

		if(procName == null) return new ProcessInfo[0];

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
			ProcessInfo procInfo = new ProcessInfo();
			item = enumVariant.nextElement().toDispatch();

			String processidString = Dispatch.call(item, "ProcessId")
					.toString();
			String commandLineString = Dispatch.call(item, "CommandLine").toString();
			String caption = Dispatch.call(item, "Caption")
					.toString();
			resultString += processidString + "\n" + caption;// + "\n" +commandLineString;
			procInfo.setHandle(processidString);
			procInfo.setCaption(commandLineString);
			processList.add(procInfo);
		}

		ComThread.Release();


		return processList.toArray(new ProcessInfo[0]);

        */

	}

	@Override
	public boolean killProcess(String pid,String name) {

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
			if(pid.equals(proc.call(proc,"Handle").toString())){
				System.out.println("kill proc (PID,caption)=("+pid+","+name+")");
			}
		}

		ComThread.Release();


		return false;
	}
}
