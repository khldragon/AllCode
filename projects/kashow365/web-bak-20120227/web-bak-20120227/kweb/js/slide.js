var pic_width=980;//ͼƬ����
var pic_height=135; //ͼƬ�߶�
var button_pos=4; //��Ťλ�� 1�� 2�� 3�� 4��
var stop_time=6000; //ͼƬͣ��ʱ��(1000Ϊ1����)
var show_text=0; //�Ƿ���ʾ���ֱ�ǩ 1��ʾ 0����ʾ
var txtcolor="000000"; //����ɫ
var bgcolor="DDDDDD"; //����ɫ
var imag=new Array();
var link=new Array();
var text=new Array();
imag[1]="images/kadv5.jpg";
link[1]="http://www.52yuanma.com/";
text[1]="���� 1";
imag[2]="images/kadv5b.jpg";
link[2]="http://www.52yuanma.com/";
text[2]="���� 2";
imag[3]="images/kadv5c.jpg";
link[3]="http://www.52yuanma.com/";
text[3]="���� 3";
imag[4]="images/kadv6.jpg";
link[4]="http://www.52yuanma.com/";
text[4]="���� 4";
imag[5]="images/kadv9.jpg";
link[2]="http://www.52yuanma.com/";
text[5]="���� 5";
//�ɱ༭���ݽ���
var swf_height=show_text==1?pic_height+20:pic_height;
var pics="", links="", texts="";
for(var i=1; i<imag.length; i++){
	pics=pics+("|"+imag[i]);
	links=links+("|"+link[i]);
	texts=texts+("|"+text[i]);
}
pics=pics.substring(1);
links=links.substring(1);
texts=texts.substring(1);
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cabversion=6,0,0,0" width="'+ pic_width +'" height="'+ swf_height +'">');
document.write('<param name="movie" value="images/focus.swf">');
document.write('<param name="quality" value="high"><param name="wmode" value="opaque">');
document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&pic_width='+pic_width+'&pic_height='+pic_height+'&show_text='+show_text+'&txtcolor='+txtcolor+'&bgcolor='+bgcolor+'&button_pos='+button_pos+'&stop_time='+stop_time+'">');
document.write('<embed src="images/focus.swf" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&pic_width='+pic_width+'&pic_height='+pic_height+'&show_text='+show_text+'&txtcolor='+txtcolor+'&bgcolor='+bgcolor+'&button_pos='+button_pos+'&stop_time='+stop_time+'" quality="high" width="'+ pic_width +'" height="'+ swf_height +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
document.write('</object>');