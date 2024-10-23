$.getScript("https://raw.githack.com/waleed-qaid/des3/main/%E2%80%8F%E2%80%8F1des.net-mdrdsh.com%20-%20rooms.js");
$("style").last().append("\n#users .uzr.stl1 .fitimg.u-pic {\n  border-radius: 100px !important;\n  margin-top: 9px !important;\n  height: 52px !important;\n  margin-left: 13px!important;\n  z-index: 0 !important;\n}\n#users .uzr.stl1 .d-flex.dots {\n  margin-top: 7px !important;\n  margin-left: 5px;\n}\n#users .uzr.stl1 .u-msg {\n  text-align: center;\n  -webkit-background-clip: text;\n  padding: 1px !important;\n  font-size: 89% !important;\n  -webkit-text-fill-color: #0000;\n  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);\n  color: transparent !important;\n  background-size: 90% 100%;\n}\n#users .uzr.stl1 .ustat {\n  width: 54px !important;\n  border-radius: 0px 50px 50px 50px !important;\n  height: 52px !important;\n  margin-top: 5px !important;\n  min-height: 0% !important;\n  margin-left: 10px;\n  z-index: 0 !important;\n  display: none;\n}\n#users .uzr.stl1 span.uhash {\n  margin-right: 324px;\n  margin-top: 24px;\n  margin-left: 0px;\n}\n#users .uzr.stl1 img.co {\n  transform: rotate(90deg);\n  margin-top: -60px !important;\n  margin-right: 282px;\n}\n#users .uzr.stl1 {\n  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;\n  margin-bottom: 3px !important;\n  margin-top: 2px !important;\n  border-radius: 4px;\n  background-size: cover;\n  border: 1px solid #fff;\n}\n#users .uzr.stl1 .c-flex.fr {\n  margin-left: -4px!important;\n  float: left;\n}\n#users .uzr.stl1 .d-flex.fl {\n  padding-right: 0px !important;\n}\n#users .uzr.stl1 .u-topic {\n  margin-left: 5px;\n}\n#users .uzr.stl1 .My_star1 {\n  width: 84px;\n  margin-top: -67px;\n  height: 80px;\n}\n#users .uzr.stl1 .My_tsor {\n  width: 79px;\n  margin-top: -45px;\n  z-index: 0;\n  margin-left: 36px;\n}\n#users .uzr.stl1 .My_vedio1 {\n  float: right;\n  width: 20px;\n  margin-top: 0px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n");
var me_user1 = setInterval(function () {
  if (myid != null) {
    clearInterval(me_user1);
    $("#users .uzr:contains('صـــَااد')").addClass("stl1");
    $("#users .uzr.stl1 .c-flex.fr").append('<img class="My_star1" src="https://up6.cc/2024/10/172972032900912.png">');
    $("#users .uzr.stl1 .c-flex.fr").append('<img class="My_tsor" src="https://i.ibb.co/ThKHx1N/image.png">');
    $("#users .uzr.stl1 .c-flex.fr").after('<div id="my_mood1" class="label label-primary" style=" margin-bottom: 1px; display: inline-block;width: 100%;margin-top: 10px;height: 22px;cursor: pointer;border-radius: 50px;padding: 0px;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #1376bb 67%, #000 100%);" href="https://www.shm0.net/">تدللي تدلعي ، يحق لكِ مـالا يحق لغيرك</div>');
    $("#users .uzr.stl1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://up6.cc/2024/10/172946129656751.gif">');
    $("#users .uzr.stl1 span.uhash, #users .uzr.stl1 img.co").hide();
    $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
    $("div#users .uzr:contains('صـــَااد') .My_vedio1").click(function () {
      $("#movon1").show();
      $("#movon1").addClass("stl1");
      $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
      $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
      $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/watch?v=v4M5jBUZecQ" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
      $("#ifr_mov1").show(function () {
        $("#upro").modal("hide");
      });
    });
  }
