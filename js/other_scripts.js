

$(function () {

var is_box_big_now = false;

if (is_box_big_now==false){
    is_box_big_now=true;
    $(".box_01").click(function(){
      changeBox_01Size();
    });
    $(".box_02").click(function(){
      changeBox_02Size();
    });
    $(".box_03").click(function(){
      changeBox_03Size();
    });
    $(".box_04").click(function(){
      changeBox_04Size();
    });
}

$(".close_big_box").click(function(){
    close_big_box();
  });

function close_big_box(){
  $(".box_01").animate({width: "50%",height: "50%"});
  $(".box_02").animate({width: "50%",height: "50%"});
  $(".box_03").animate({width: "50%",height: "50%"});
  $(".box_04").animate({width: "50%",height: "50%"});
  $(".box_01").css("visibility","visible");
  $(".box_02").css("visibility","visible");
  $(".box_03").css("visibility","visible");
  $(".box_04").css("visibility","visible");
}

function changeBox_01Size(){
  $(".box_01").addClass("box_01_big");
  $(".box_01").removeClass("box_01_pseudo");
  $(".boxes_text").css("display","none");
  $(".box_02").animate({width: "0%"});
  $(".box_03").animate({height: "0%"});
  $(".box_03").animate({height: "0%"});
  $(".box_01").animate({width: "100%",height: "100%"});
  $(".box_02").css("visibility","hidden");
  $(".box_03").css("visibility","hidden");
  $(".box_04").css("visibility","hidden");
}

function changeBox_02Size(){
  $(".box_02").removeClass("box_02_pseudo");
  $(".box_01").animate({width: "0%"});
  $(".box_03").animate({height: "0%"});
  $(".box_03").animate({height: "0%"});
  $(".box_02").animate({width: "100%",height: "100%"});
  $(".box_01").css("visibility","hidden");
  $(".box_03").css("visibility","hidden");
  $(".box_04").css("visibility","hidden");
  }

function changeBox_03Size(){
  $(".box_03").removeClass("box_03_pseudo");
  $(".box_04").animate({width: "0%"});
  $(".box_01").animate({height: "0%"});
  $(".box_02").animate({height: "0%"});
  $(".box_03").animate({width: "100%",height: "100%"});
  $(".box_04").css("visibility","hidden");
  $(".box_01").css("visibility","hidden");
  $(".box_02").css("visibility","hidden");
}

function changeBox_04Size(){
  $(".box_04").removeClass("box_04_pseudo");
  $(".box_03").animate({width: "0%"});
  $(".box_01").animate({height: "0%"});
  $(".box_02").animate({height: "0%"});
  $(".box_04").animate({width: "100%",height: "100%"});
  $(".box_03").css("visibility","hidden");
  $(".box_01").css("visibility","hidden");
  $(".box_02").css("visibility","hidden");
}

  $(".boxes").mouseover(function(){                
    $(this).find("span").css("border-bottom","3px dashed transparent");
    });
  $(".boxes").mouseout(function(){                
    $(this).find("span").css("border-bottom","3px dashed");
    });


/*  $('.owl-carousel').owlCarousel();*/

  $(".highcharts-series-0").on("mouseover mouseout", function(e){
        var reason_1 = "<span class='percentage'>49.8%</span><h4 class='dg_info_top_text'>Переезд в другой город в поисках работы</h4><p class='dg_info_text'>Люди едут в большой город в надежде найти работу и средства к существованию своей семьи. Лишившись работы из-за проблем со здоровьем, сокращения или непорядочности работодателя, люди остаются без денег и жилья.</p>";
        reason_2 = "<span class='percentage'>34.3%</span><h4 class='dg_info_top_text'>Проблемы в семье</h4><p class='dg_info_text'>Первое время после распада семьи человек может найти кров у знакомых, но продолжаться долго это не может. Часты и случаи, когда человек остается на улице из-за непорядочности родственников (из-за «квартирного вопроса»).</p>";
        reason_3 = "<span class='percentage'>18.6%</span><h4 class='dg_info_top_text'>Жертвы мошенничества/вымогательства</h4><p class='dg_info_text'>Жертвами часто становятся одинокие люди — выпускники детдомов, люди с ментальными нарушениями, пожилые, за которых некому постоять.</p>";
        reason_4 = "<span class='percentage'>14.1%</span><h4 class='dg_info_top_text'>Другие причины</h4><p class='dg_info_text'>К ним относятся такие проблемы и их сочетания как: выселение из служебного жилья; вынужденное переселение; взыскание жилья за долги; конфликт с соседями; нежелание жить оседло и личный выбор странствовать.</p>";
        reason_5 = "<span class='percentage'>11.5%</span><h4 class='dg_info_top_text'>Потеря возможности снимать жильё</h4><p class='dg_info_text'>При неудачном стечении обстоятельств человек может остальтся без средств к существованию. Даже при хороших отношениях арендодетель не позволит долго жить в своей квартире без оплаты.</p>";
        reason_6 = "<span class='percentage'>10.7%</span><h4 class='dg_info_top_text'>Потеря работы</h4><p class='dg_info_text'>В комплексе с другими факторами это обстоятельство сильно повышает риск оказаться на улице. Отсутствие собственного жилья, проблемы со здоровьем, потеря работы приводят к тому, что человек не может обеспечивать себя.</p>";
        reason_7 = "<span class='percentage'>8%</span><h4 class='dg_info_top_text'>Отсутствие своего жилья после освобождения из заключения</h4><p class='dg_info_text'>Часто родственники осуждённых людей незаконно выселяют их во время отбывания срока. Случается, что по приезду человек находит на месте дома пустырь, если во время его заключения дом признали аварийным.</p>";
        reason_8 = "<span class='percentage'>5.1%</span><h4 class='dg_info_top_text'>Заболевания и травмы</h4><p class='dg_info_text'>Часто тяжелые заболевания и травмы влекут за собой невозможность работать и обеспечивать себя, требуют огромных денег на лечение. Получить положенную от государства помощь в одиночку не всегда возможно.</p>";
        reason_9 = "<span class='percentage'>5.3%</span><h4 class='dg_info_top_text'>Продажа жилья</h4><p class='dg_info_text'>Продать жилье людей толкает нужда или трагические события. Например, необходимость оплатить дорогостоящее лечение или большие долги.</p>";
        reason_10 = "<span class='percentage'>5.7%</span><h4 class='dg_info_top_text'>Алкогольная или наркотическая зависимость</h4><p class='dg_info_text'>В подавляющем большинстве случаев зависимости бездомные люди приобретают, уже оказавшись на улице: от безысходности, отчаяния, в попытках согреться в холода.</p>";
        reason_11 = "<span class='percentage'>3.3%</span><h4 class='dg_info_top_text'>На улице после выпуска из детдома</h4><p class='dg_info_text'>Государство обязано снабжать жильём всех совершеннолетних дееспособных выпускников интернатов и детских домов. К сожалению, часто жильё ребята ждут жильё годами, — и далеко не все его получают.</p>";
        reason_12 = "<span class='percentage'>2.5%</span><h4 class='dg_info_top_text'>Жильё сгорело или пришло в негодность</h4><p class='dg_info_text'>Жилье сгорело или пришло в негодность.</p>";

        var aria_label = $(e.target).attr("aria-label");
        var result_split = aria_label.split(" ");  
        var result_replace = result_split[0].replace(".","");

        switch(result_replace) {
          case '1': {
            $(".diagram_info").html(reason_1);
            break;
          }
          case '2': {
            $(".diagram_info").html(reason_2);
            break;
          }
          case '3': {
            $(".diagram_info").html(reason_3);
            break;
          }
          case '4': {
            $(".diagram_info").html(reason_4);
            break;
          }
          case '5': {
            $(".diagram_info").html(reason_5);
            break;
          }
          case '6': {
            $(".diagram_info").html(reason_6);
            break;
          }
          case '7': {
            $(".diagram_info").html(reason_7);
            break;
          }
          case '8': {
            $(".diagram_info").html(reason_8);
            break;
          }
          case '9': {
            $(".diagram_info").html(reason_9);
            break;
          }
          case '10': {
            $(".diagram_info").html(reason_10);
            break;
          }
          case '11': {
            $(".diagram_info").html(reason_11);
            break;
          }
          case '12': {
            $(".diagram_info").html(reason_12);
            break;
          }
        }
    });
});