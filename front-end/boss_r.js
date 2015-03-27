  //var num = 1;
  var runWindow;
  var closeWindow;
  function addItem(obj, strname, strvalue) {
    var oOption = document.createElement("OPTION");
    oOption.text= strname;
    oOption.value= strvalue;
    obj.add(oOption);
  }

  function trim(str) {
    //rtrim
    while (str.charAt(str.length- 1) == " ")
       str = str.substring(0, str.length- 1);
    //ltrim
    while (str.charAt(0) == " ")
       str = str.substring(1, str.length);
    return str;
  }

  function changeENV() {
    var i, j, k, len, len_dbi, pos, str;
    var ENV = document.theForm.ENV.value;
    var dbs = "";
    i = 0;  j = 0;  len = cfg.length;
    while (i < len) {
       if (cfg[i+ 1] == ENV) {
          dbs = cfg[i+ 2];  break;
       }
       i = i+ 3;  j = j+ 1;
    }
    //alert('ENV = '+ ENV+ '  dbs = ' + dbs);

    var dbi = new Array();
    j = 0;
    while (dbs != "") {
       pos = dbs.indexOf(",");
       if (pos == -1) {
          str = trim(dbs);  dbs = "";
       }
       else {
          str = trim(dbs.substr(0, pos));  dbs = dbs.substr(pos+ 1);
       }
       if (str != "") { dbi[j] = str;  j++; }
    }

    while (document.theForm.SCHEME.options.length)
       document.theForm.SCHEME.remove(0);

    len_dbi = dbi.length;  len = db.length;
    k = 0;
    while (k < len_dbi) {
       i = 0;
       while (i < len) {
          if (db[i+ 1].toUpperCase() == dbi[k].toUpperCase()) {
             document.theForm.SCHEME.options[k] = new Option(db[i], db[i+ 1], k == 0);
             break;
          }
          i = i+ 2;
       }
       k = k+ 1;
    }
  }

  function changeHost() {
    var i, j, k, len, len_cfgi, pos, str;
    var WEBHOST = document.theForm.WEBHOST.value;
    var cfgs = "";
    i = 0;  j = 0;  len = srv.length;
    while (i < len) {
       if (srv[i+ 1] == WEBHOST) {
          cfgs = srv[i+ 2];  break;
       }
       i = i+ 3;  j = j+ 1;
    }
    //alert('cfgs = ' + cfgs);

    var cfgi = new Array();
    j = 0;
    while (cfgs != "") {
       pos = cfgs.indexOf(",");
       if (pos == -1) {
          str = trim(cfgs);  cfgs = "";
       }
       else {
          str = trim(cfgs.substr(0, pos));  cfgs = cfgs.substr(pos+ 1);
       }
       if (str != "") { cfgi[j] = str;  j++; }
    }

    while (document.theForm.ENV.options.length) {
       document.theForm.ENV.remove(0);
    }

    len_cfgi = cfgi.length;  len = cfg.length;
    k = 0;
    while (k < len_cfgi) {
       i = 0;
       while (i < len) {
          if (cfg[i+ 1].toUpperCase() == cfgi[k].toUpperCase()) {
             document.theForm.ENV.options[k] = new Option(cfg[i], cfg[i+ 1], k == 0);
             //alert("ENV.options["+ j+ "] = "+ cfg[i+ 1]);
             if (k == 0) changeENV();
             break;
          }
          i = i+ 3;
       }
       k = k+ 1;
    }
    //cfgi = null;
  }

  // получение параметра из URL
  function getParam(sParamName){
    var Params = location.search.substring(1).split("&"); // отсекаем <?> и вносим переменные и их значени€ в массив
    var variable = "";
    for (var i = 0; i < Params.length; i++){ // пробегаем весь массив
       if (Params[i].split("=")[0].toUpperCase() == sParamName.toUpperCase()){ // если это искома€ переменна€ - бинго!
          if (Params[i].split("=").length > 1) variable = Params[i].split("=")[1]; // если значение параметра задано, то возвращаем его
             return variable;
       }
    }
    return "";
  }

  function maximizeWindow(){
    var offset = (navigator.userAgent.indexOf("Mac") != -1   ||
                  navigator.userAgent.indexOf("Gecko") != -1 ||
                  navigator.userAgent.indexOf("Netscape") != -1 ) ? 0 : 4;
    window.moveTo(-offset,-offset);
    window.resizeTo(screen.availWidth + (2*offset),
                     screen.availHeight + (2*offset));
  }

  window.onload = function() {
    var i, len, str, pos;
    var iArm       = getParam("UARM");
    var iUserID    = getParam("USERID");
    var iApp_host  = getParam("APP_HOST");
    var iScheme    = getParam("SCHEME");
    //var iSeparate  = getParam("SEPARATEFRAME").toUpperCase();
    var iWINTYPE   = getParam("WINTYPE").toUpperCase();
    var iOraLook   = getParam("LOOKANDFEEL").toUpperCase().toUpperCase();
    var iStatusBar = getParam("STATUS").toUpperCase().toUpperCase();
    var iColor     = getParam("COLORSCHEME");
    var iAppletwh  = getParam("APPLETWH");
    var iConfig    = getParam("CONFIG");
    var SERVER = "", PASSWORD = "", SCHEME = "";
    var autostart = getParam("AUTOSTART").toUpperCase();

    i = 0;  j = 0;  len = app.length;
    document.theForm.ARM.options[0] = null;  // удалить элемент
    while (i < len) {
       document.theForm.ARM.options[j] = new Option(app[i+ 1], app[i], i == 0);
       if (iArm != "" && app[i].substr(app[i].indexOf(";")+1) == iArm)
          document.theForm.ARM.value=app[i];
       i = i+ 2;  j = j+ 1;
    }

    i = 0;  j = 0;  len = srv.length;
    document.theForm.WEBHOST.options[0] = null;  // удалить элемент
    while (i < len) {
       document.theForm.WEBHOST.options[j] = new Option(srv[i], srv[i+ 1], i == 0);
       if (j == 0)
          changeHost();
       else {
          if (iApp_host != "" && srv[i+1].indexOf(iApp_host) != -1) {
             document.theForm.WEBHOST.value=srv[i+1];
             changeHost();
          }
       }
       i = i+ 3;  j = j+ 1;
    }
    if (iConfig != "") {
      document.theForm.ENV.value = iConfig;
      changeENV();
    }

    if (iWINTYPE != "") {
       if (iWINTYPE == "SAME")
          document.theForm.WINTYPE_SAME.checked = true;
       else if (iWINTYPE == "NEW_E")
          document.theForm.WINTYPE_NEW_E.checked = true;
       else
          document.theForm.WINTYPE_NEW_F.checked = true;
    }
    if (iOraLook != "") {
       if (iOraLook == "ORACLE")
          document.theForm.LOOK.checked = true;
       else
          document.theForm.LOOK.checked = false;
    }
    if (iStatusBar != "") {
       if (iStatusBar == "TRUE" || iStatusBar == "YES")
          document.theForm.StatusStr.checked = true;
       else
          document.theForm.StatusStr.checked = false;
    }
    if (iColor != "")
       document.theForm.COLOR.value = iColor;
    if (iAppletwh != "")
       document.theForm.Applet_wh.value = iAppletwh;

    if (hidePSW != 0)
       mTable.deleteRow(3);
    if (iScheme != "")
       document.theForm.SCHEME.value = iScheme;
    if (iUserID == "")
      document.theForm.USERID.value = def_user;
    else {
      // split user --> uname:u_owner/psw@tns
      pos = iUserID.indexOf("@");
      if (pos != -1) {
         SERVER  = iUserID.substr(pos+ 1);
         iUserID = iUserID.substr(0, pos);
      }
      pos = iUserID.indexOf("/");
      if (pos != -1) {
         PASSWORD = iUserID.substr(pos+ 1);
         iUserID  = iUserID.substr(0, pos);
         if (hidePSW == 0) document.theForm.PSW.value = PASSWORD;
      }
      pos = iUserID.indexOf(":");
      if (pos != -1) {
         SCHEME = iUserID.substr(pos+ 1);
         iUserID = iUserID.substr(0, pos);
      }
      document.theForm.USERID.value = iUserID;
      if (SCHEME != "") {
         if (SERVER != "")
            document.theForm.SCHEME.value = SCHEME+"@"+SERVER;
         else
            document.theForm.SCHEME.value = SCHEME;
      }   
    }
    if (autostart == "YES" || autostart == "TRUE") runForm();
  }

  function runForm() {
    var servletPath = "/forms/frmservlet";
    var slash = "/";
    var colon = ":";
    var qmark = "?";
    var paramsep = "&";
    var wtitle = "_blank";

    //var ARMLIST = document.theForm.ARM;
    //var FORM = ARMLIST.options[ARMLIST.selectedIndex].value;
    var FORM = document.theForm.ARM.value;
    var UARM = "";
    var pos = FORM.indexOf(";");
    //if (!runWindow || runWindow.closed || !closeWindow || closeWindow.closed)
    //   alert("next");
    //else {
    //   alert("already started");
    //   return;
    //}

    if (pos != -1) {
       UARM = FORM.substr(pos+ 1);
       FORM = FORM.substr(0, pos);
    }

    var USERID = document.theForm.USERID.value;
    var PASSWORD = "";
    if (hidePSW == 0) PASSWORD = document.theForm.PSW.value;
    var SCHEME = document.theForm.SCHEME.value;
    var SERVER;
    pos = SCHEME.indexOf("@");
    if (pos == -1) SERVER = "";
    else {
       SERVER = SCHEME.substr(pos+ 1);
       SCHEME = SCHEME.substr(0, pos);
    }
    // split user --> uname:u_owner/psw@tns
    pos = USERID.indexOf("@");
    if (pos != -1) {
       SERVER = USERID.substr(pos+ 1);
       USERID = USERID.substr(0, pos);
    }
    pos = USERID.indexOf("/");
    if (pos != -1) {
       PASSWORD = USERID.substr(pos+ 1);
       USERID = USERID.substr(0, pos);
    }
    pos = USERID.indexOf(":");
    if (pos != -1) {
       SCHEME = USERID.substr(pos+ 1);
       USERID = USERID.substr(0, pos);
    }

    var env = document.theForm.ENV.value;

    var bk_report_path = "C:\\BK\\TEMP";
    var rpt_srv = "";
    var WEBHOST = document.theForm.WEBHOST.value;
    pos = WEBHOST.indexOf(";");
    if (pos != -1) {
       rpt_srv = WEBHOST.substr(pos+ 1);
       WEBHOST = WEBHOST.substr(0, pos);
       pos = rpt_srv.indexOf(";");
       if (pos != -1) {
          bk_report_path = rpt_srv.substr(pos+ 1);
          rpt_srv = rpt_srv.substr(0, pos);
       }
    }

    var LOOK;
    if (document.theForm.LOOK.checked) LOOK = 'Oracle'; else LOOK = 'generic';
    var colorlist = document.theForm.COLOR;
    var COLOR = colorlist.options[colorlist.selectedIndex].value;
    var SeparateFrame;
    //if (document.theForm.SepFrame.checked) SeparateFrame = 'true'; else SeparateFrame = 'false';
    if (document.theForm.WINTYPE_NEW_F.checked) SeparateFrame = 'true'; else SeparateFrame = 'false';
    var StatusStr;
    if (document.theForm.StatusStr.checked) StatusStr = 'yes'; else StatusStr = 'no';

    var URL = WEBHOST;
    if (-1 == URL.indexOf("://")) URL = "http://" + WEBHOST;
    URL = URL+ servletPath + qmark+ "config="+ env+ paramsep+ "form=" + FORM;
    URL = URL+ paramsep+ "otherparams=SCHEME=" + SCHEME +
              "+APP_HOST="+ WEBHOST+
              "+RPT_SRV="+ rpt_srv+
              "+RPT_HOST="+ WEBHOST+
              "+BK_REPORT_PATH="+ bk_report_path;
    if (UARM != "") URL = URL+ "+UARM=" + UARM+  "+APP=APP_"+ UARM;
    URL = URL+ "+SEPARATEFRAME=" + SeparateFrame;
//      URL = URL + "useSDI=NO";

    URL = URL+ paramsep+ "lookAndFeel="+ LOOK
             + paramsep+ "colorScheme="+ COLOR
             + paramsep+ "separateFrame="+ SeparateFrame;

    if (USERID != "") {
       URL = URL+ paramsep+ "userid="+ USERID;
       if (PASSWORD != "") URL = URL+ "/"+ PASSWORD;
       if (SERVER != "") URL = URL+ "@"+ SERVER;
    }
    else if (UARM == "IEMP") {
       if (SERVER != "")
          URL = URL+ paramsep+ "userid=@"+ SERVER;
       else {
          alert("Ќеверна€ конфигураци€. Ќе задан сервер дл€ IEMP-коннекта");
          return;
       }
    }
    else {
       alert("¬ведите им€ пользовател€");
       return;
    }

    var W, H, WxH;


    var Applet_wlist = document.theForm.Applet_wh;
    WxH = Applet_wlist.options[Applet_wlist.selectedIndex].value;
    pos = WxH.indexOf("x");
    if (pos != -1) {
       H = WxH.substr(pos+ 1);
       W = WxH.substr(0, pos);
    }
    else {
       W = 0;  H = 0;
    }
    if (W != 0 || H != 0) {
       if (SeparateFrame == 'true') {
          if (W == 0) W = 990;
          if (H == 0) H = screen.height- 38;
          URL = URL+ paramsep+ "width="+ W+ paramsep+ "height="+ H;
          W = 1;  H = 1;
       }
       else if (document.theForm.WINTYPE_SAME.checked) {
          if (W == 0) W = screen.width- 44;
          if (H == 0) H = screen.height- 158;
          URL = URL+ paramsep+ "width="+ W+ paramsep+ "height="+ H;
       }
       else {
          if (W == 0) W = screen.width- 44;
          if (H == 0) H = screen.height- 76;
          URL = URL+ paramsep+ "width="+ W+ paramsep+ "height="+ H;
          W = W+ 40;  H = H+ 30;
       }
       WxH = "height="+ H+ ",width="+ W;
    }
    else if (SeparateFrame == 'true') {
       W = 912;  H = 640;
       if (screen.height <= 600)
          URL = URL+ paramsep+ "width=754"+ paramsep+ "height=550";
       if (screen.height <= 768)
          URL = URL+ paramsep+ "width=920"+ paramsep+ "height=730";
       else if (screen.height <= 800)
          URL = URL+ paramsep+ "width=960"+ paramsep+ "height=764";
       else
          URL = URL+ paramsep+ "width=990"+ paramsep+ "height=780";
       WxH = "height=1,width=1";
    }
    else if (document.theForm.WINTYPE_SAME.checked) {
       W = 912;  H = 640;
       if (screen.height <= 600)
          URL = URL+ paramsep+ "width=754"+ paramsep+ "height=550";
       else if (screen.height <= 768)
          URL = URL+ paramsep+ "width=890"+ paramsep+ "height=610";
       else if (screen.height <= 800)
          URL = URL+ paramsep+ "width=912"+ paramsep+ "height=640";
       else if (screen.height <= 900)
          URL = URL+ paramsep+ "width=952"+ paramsep+ "height=740";
       else
          URL = URL+ paramsep+ "width=990"+ paramsep+ "height=764";
       WxH = "height="+ H+ ",width="+ W;
    }
    else {
       W = 912;  H = 640;
       if (screen.height <= 600) {
          URL = URL+ paramsep+ "width=762"+ paramsep+ "height=556";
          W = 792;  H = 580;
       }
       else if (screen.height <= 768) {
          URL = URL+ paramsep+ "width=908"+ paramsep+ "height=650";
          W = 946;  H = 680;
       }
       else if (screen.height <= 800) {
          URL = URL+ paramsep+ "width=950"+ paramsep+ "height=700";
          W = 986;  H = 730;
       }
       else {
          URL = URL+ paramsep+ "width=990"+ paramsep+ "height=764";
          W = 1030;  H = 794;
       }
       WxH = "height="+ H+ ",width="+ W;
       if (screen.height <= 768) WxH = WxH+ ",top=1, left=10";
    }

//alert("333+ URL "+ URL);
//    if (navigator.appName == "Microsoft Internet Explorer") {
//    if (navigator.appName == "Netscape")
//    window.location.href = URL;
    if (!document.theForm.WINTYPE_SAME.checked) {
       runWindow = window.open(URL, wtitle, WxH+ ",status="+ StatusStr+ ",location=no,menubar=no,tollbar=no,titlebar=yes,resizable=yes,scrollbars=yes");
       closeWindow = window.open("close0.htm", "_self", "", true);
       closeWindow.opener = null;
    }
    else
       runWindow = window.open(URL, "_self", "", true);
    runWindow.opener = null;
  }
