$(`<div id="fhd1"><a id="fhd2" target="_blank" type="a" href="" style="border-radius:0 10% 0 0" class="btn minix btn-primary">القوانين</a><a id="fhd2" target="_blank" type="a" href="" style="border-radius:0;border-right:1px solid#f5f8fa" class="btn minix btn-primary">الاشتراكات</a><a id="fhd2" target="_blank" type="a" href="" style="border-radius:0;border-right:1px solid#f5f8fa" class="btn minix btn-primary">راديو</a><a id="fhd2" target="_blank" type="a" href="" style="border-radius:10% 0 0 0;border-right:1px solid#f5f8fa" class="btn minix btn-primary">ابراج اليوم</a><a id="fhd10" target="_blank" type="a" href="" style="border-radius:0 0 10% 0;border-top:1px solid#f5f8fa" class="btn minix btn-primary">اتصل بنا</a><a id="fhd10" target="_blank" type="a" href="" style="border-radius:0;border-right:1px solid#f5f8fa;border-top:1px solid#f5f8fa" class="btn minix btn-primary">ق.السوابر</a><a id="fhd10" target="_blank" type="a" href="" style="border-radius:0;border-right:1px solid#f5f8fa;border-top:1px solid#f5f8fa" class="btn minix btn-primary">تطبيق</a><a id="fhd10" target="_blank" type="a" href="" style="border-radius:0 0 0 10%;border-right:1px solid#f5f8fa;border-top:1px solid#f5f8fa" class="btn minix btn-primary">اختصارات</a></div>`).insertBefore('.nav-tabs');

$(`<center><div><marquee direction="right" id="fhd43" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="3"> أهلا وسهلا بكم في شات  <font color="#595757" class="fhd12">الاميره</font>أفضل سوبر لهذا الأسبوع · ? <font class="fhd11" color="#727A54"> قريباَ </font> ? · ?أفضل زائر لهذا الأسبوع · ? <font class="fhd11" color="#ff9900">قريبا</font> ? · ?أفضل زائرة لهذا الأسبوع · ? <font class="fhd11" color="#ff00ff"> قريباَ </font> ? · مبدع الحائط لهذا الأسبوع · ? <font class="fhd11" color="#5CAD9A"> قريباَ </font> ? · مبدعة الحائط لهذا الأسبوع · ? <font class="fhd11" color="#800000"> قريباَ </font> ? · ?أفضل تواجد لهذا الأسبوع · ? <font class="fhd11" color="#417570"> قريباَ </font> الاداره
</marquee></div></center>`).insertBefore('#youcam-copyrights');

$(`<link rel="stylesheet" type="text/css" href="https://www.fontstatic.com/f=rsail-bold,sabgha,tachkili,arabswell-1,rawy-bold,sadiyah" />
`).insertBefore('body');

$("#fhd43").attr("class","label-primary");

$("#react-tabs-1,#react-tabs-2,#react-tabs-3").attr("class","nav-item react-tabs__tab label-primary");

$('label#login-form__hidden-label')['click'](function() {
$(this)['toggleClass']('mr-fhd')
});

$("button#guest-form__submit, button#login-form__submit").click(function() {
    jQuery(document).ready(function() {
        setTimeout(function() {
$("#chat__footer").append('<li id="chat__footer__menu__notifications_item" class="border border-color btn-primary chat__footer__menu__item"><span class="fa fa-bell"></span></li>'); 
$("li#chat__footer__menu__notifications_item").click(function() {            $("div#chat__body__settings_pane__container__button--notifications").click();
            });
    }, 1e3);
});
});

$("button#guest-form__submit, button#login-form__submit").click(function() {
    jQuery(document).ready(function() {
        setTimeout(function() {
$("#chat__body__wall_pane .chat_pane__header").append("<div class='creator'><span class='name1'>مبدع الحائط </span></div>");
$(".creator").click(function() {                $("li#chat__footer__menu__wall_creator_item").click();
            });

        }, 1500);
    });
});
