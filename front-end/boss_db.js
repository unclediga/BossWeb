// символ \ в указывать дважды
// первая строка будет строкой по умолчанию


//<-- имя_схемы@имя_сервера БД  -->
// "name", "value"
// name - то что отобразится на экране, value - то что подставится
// "value"  должны быть уникальны и не зависимы от регистра
var db = new Array (
  "APP",  "boss35@APP",
  "APPTEST",  "boss35@APPTEST"
 );


//<!-- имя реализации  -->
//<-- "name", "value", "список, через запятую, доступных БД" -->
// "value"  должны быть уникальны и не зависимы от регистра
// БД в списке не должны повторяться
var cfg = new Array (

    "Рабочая версия(bk_prod,APP)",   // name -  что отображается
    "bk_prod",                      // value - что подставится
    "boss35@APP",                    // список, через запятую, доступных БД
     "Тестовая версия(bk_test,APPTEST)",   // name -  что отображается
    "bk_test",                             // value - что подставится
    "boss35@APPTEST" // список, через запятую, доступных БД

);


//<!-- имя_сервера_приложений;имя_сервера_отчетов;каталог_Z_отчетов  -->
//<-- "name", "value", "список доступных реализаций" -->
// "value"  должны быть уникальны и не зависимы от регистра
// реализации в списке не должны повторяться
// Имя сервера отчетов можно не указывать, тогда будут подряд две ";", например
//    "BK_APPSRV_TEST:7778;;C:\\TEMP",
// Но тогда в файле  С:\Oracle\FRHome_1\forms\server\bk.env
// необходимо указать  имя сервера отчетов в строке с именем параметра RPTSRV_NAME
// Т.е.
// RPTSRV_NAME=rep_BK_APPSRV_TEST_FRHome1
// Такой способ(не указывать имя сервера отчетов) является обязательным,
// если будет установлена опция WEB Caching или Load Balancing
// Если Вы будете использовать протокол HTTPS, то имя_сервера_приложений должно
// начинаться с https, например "https://BK_APPSRV:7778"
var srv = new Array (
    "OASBOSS1",                                    // name -  что отображается
    "oasboss1:7778;rep_oasboss1_FRHome1;C:\\TEMP", // value - что подставится
    "bk_prod",                           // список, через запятую, доступных реализаций
    "OASBOSS2",                                   
    "oasboss2:7778;rep_oasboss2_FRHome1;C:\\TEMP",
    "bk_prod",       
    "OASBOSS1 тестовый",
    "oasboss1:7778;rep_oasboss1_FRHome1;C:\\TEMP",
    "bk_test",
    "OASBOSS2 тестовый",
    "oasboss2:7778;rep_oasboss2_FRHome1;C:\\TEMP",
    "bk_test"
// ,"localhost",
//    "localhost:8889;rep_ygoncharov;C:\\BK\\TEMP",
//    "bk_prod, bk_test"
);


// пользователь, подставляемый по умолчанию
var def_user = "boss35";  //"test1";


// скрыть поле с паролем
var hidePSW = 0;  // 1- скрыть, 0 - показать


//<!-- каталог приложения;параметр_UARM  -->
//<-- value  name -->
var app = new Array (
  ".\\cli\\hr\\hr_root.fmx;UPR",    "Учет кадров",
  ".\\cli\\hr\\hr_root.fmx;UST",    "Штатное расписание",
  ".\\cli\\hr\\hr_root.fmx;UTB",    "Табельный учет",
  ".\\cli\\hr\\hr_root.fmx;UPF",    "Персонифицированный учет",
  ".\\cli\\hr\\hr_root.fmx;UPRMIL", "Военно-учетный стол",
  ".\\cli\\hr\\hr_root.fmx;SL",     "Расчет заработной платы",
  ".\\cli\\hr\\hr_root.fmx;UHRR",   "Оценка и развитие персонала",
  ".\\cli\\hr\\hr_root.fmx;UED",    "Обучение и повышение квалификации",
  ".\\cli\\hr\\hr_root.fmx;URECR",  "Подбор персонала",
  ".\\cli\\hr\\hr_root.fmx;UCB",    "Компенсации и социальные пакеты",
  ".\\cli\\hr\\hr_root.fmx;UAP",    "Анализ кадровых процессов",
  ".\\cli\\hr\\hr_root.fmx;IEMP",   "Личные сведения",
  ".\\cli\\hr\\hr_root.fmx;HRADM",  "Администратор Кадровика"
);
// ,".\\cli\\krs\\krs.fmx;KRS",    "КРС"
// ,".\\cli\\hr_u\\putevki.fmx;PUTEV","Путевые листы"

