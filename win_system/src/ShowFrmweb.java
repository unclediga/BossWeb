import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.Dispatch;
import com.jacob.com.EnumVariant;
import com.jacob.com.Variant;
import com.jacob.com.ComThread;

public class ShowFrmweb {

	/**
	 * example run loop method called by main()
	 */
	public void runMonitor() {


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
				+ "where Caption = 'chrome.exe'";
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
			resultString += processidString + "\n" + caption + "\n" +commandLineString;
			System.out.println(resultString);

		}

		ComThread.Release();

	}

	public static void main(String[] args) {
		ShowFrmweb utilConnection = new ShowFrmweb();
		utilConnection.runMonitor();
	}

}
