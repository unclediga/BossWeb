// ������ \ � ��������� ������
// ������ ������ ����� ������� �� ���������


//<-- ���_�����@���_������� ��  -->
// "name", "value"
// name - �� ��� ����������� �� ������, value - �� ��� �����������
// "value"  ������ ���� ��������� � �� �������� �� ��������
var db = new Array (
  "APP",  "boss35@APP",
  "APPTEST",  "boss35@APPTEST"
 );


//<!-- ��� ����������  -->
//<-- "name", "value", "������, ����� �������, ��������� ��" -->
// "value"  ������ ���� ��������� � �� �������� �� ��������
// �� � ������ �� ������ �����������
var cfg = new Array (

    "������� ������(bk_prod,APP)",   // name -  ��� ������������
    "bk_prod",                      // value - ��� �����������
    "boss35@APP",                    // ������, ����� �������, ��������� ��
     "�������� ������(bk_test,APPTEST)",   // name -  ��� ������������
    "bk_test",                             // value - ��� �����������
    "boss35@APPTEST" // ������, ����� �������, ��������� ��

);


//<!-- ���_�������_����������;���_�������_�������;�������_Z_�������  -->
//<-- "name", "value", "������ ��������� ����������" -->
// "value"  ������ ���� ��������� � �� �������� �� ��������
// ���������� � ������ �� ������ �����������
// ��� ������� ������� ����� �� ���������, ����� ����� ������ ��� ";", ��������
//    "BK_APPSRV_TEST:7778;;C:\\TEMP",
// �� ����� � �����  �:\Oracle\FRHome_1\forms\server\bk.env
// ���������� �������  ��� ������� ������� � ������ � ������ ��������� RPTSRV_NAME
// �.�.
// RPTSRV_NAME=rep_BK_APPSRV_TEST_FRHome1
// ����� ������(�� ��������� ��� ������� �������) �������� ������������,
// ���� ����� ����������� ����� WEB Caching ��� Load Balancing
// ���� �� ������ ������������ �������� HTTPS, �� ���_�������_���������� ������
// ���������� � https, �������� "https://BK_APPSRV:7778"
var srv = new Array (
    "OASBOSS1",                                    // name -  ��� ������������
    "oasboss1:7778;rep_oasboss1_FRHome1;C:\\TEMP", // value - ��� �����������
    "bk_prod",                           // ������, ����� �������, ��������� ����������
    "OASBOSS2",                                   
    "oasboss2:7778;rep_oasboss2_FRHome1;C:\\TEMP",
    "bk_prod",       
    "OASBOSS1 ��������",
    "oasboss1:7778;rep_oasboss1_FRHome1;C:\\TEMP",
    "bk_test",
    "OASBOSS2 ��������",
    "oasboss2:7778;rep_oasboss2_FRHome1;C:\\TEMP",
    "bk_test"
// ,"localhost",
//    "localhost:8889;rep_ygoncharov;C:\\BK\\TEMP",
//    "bk_prod, bk_test"
);


// ������������, ������������� �� ���������
var def_user = "boss35";  //"test1";


// ������ ���� � �������
var hidePSW = 0;  // 1- ������, 0 - ��������


//<!-- ������� ����������;��������_UARM  -->
//<-- value  name -->
var app = new Array (
  ".\\cli\\hr\\hr_root.fmx;UPR",    "���� ������",
  ".\\cli\\hr\\hr_root.fmx;UST",    "������� ����������",
  ".\\cli\\hr\\hr_root.fmx;UTB",    "��������� ����",
  ".\\cli\\hr\\hr_root.fmx;UPF",    "������������������� ����",
  ".\\cli\\hr\\hr_root.fmx;UPRMIL", "������-������� ����",
  ".\\cli\\hr\\hr_root.fmx;SL",     "������ ���������� �����",
  ".\\cli\\hr\\hr_root.fmx;UHRR",   "������ � �������� ���������",
  ".\\cli\\hr\\hr_root.fmx;UED",    "�������� � ��������� ������������",
  ".\\cli\\hr\\hr_root.fmx;URECR",  "������ ���������",
  ".\\cli\\hr\\hr_root.fmx;UCB",    "����������� � ���������� ������",
  ".\\cli\\hr\\hr_root.fmx;UAP",    "������ �������� ���������",
  ".\\cli\\hr\\hr_root.fmx;IEMP",   "������ ��������",
  ".\\cli\\hr\\hr_root.fmx;HRADM",  "������������� ���������"
);
// ,".\\cli\\krs\\krs.fmx;KRS",    "���"
// ,".\\cli\\hr_u\\putevki.fmx;PUTEV","������� �����"

