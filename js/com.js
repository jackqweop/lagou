
		    var msg = document.getElementById('msg');

		    // 读取cookie
		    var cookies = document.cookie;

		    if (cookies) {
		        var arr = cookies.split('; ');

		        arr.forEach(function(item) {
		            var temp = item.split('=');
		            if (temp[0] === 'phonenumber') {
		                msg.innerHTML = '<div class="haslogin center"><div class="headcon"><img class="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png"></div><div class="name">'+ temp[1] +'</div></div>'+'<a href="#" id="tuichu">退出</a>'
		            }
		        });

		    }

		    		
		    var tui = document.getElementById('tuichu');
		    tui.onclick=function(){
		    	var now = new Date();
		    	now.setDate(now.getDate()-9);
		    console.log(now);
		    	document.cookie = "phonenumber=ad0;expires="+now+";path=/";
		    	document.cookie = "password=admin;expires="+now+";path=/";
		    	
		    }

		    function doUpload() {
			    console.log("abc")
			    $.ajax({
			        url: 'http://localhost:12345/upload-single',
			        type: 'POST',
			        cache: false, //不必须
			        data: new FormData($('#uploadForm')[0]),
			        processData: false,
			        contentType: false,
			        success: function(data) {
			            console.log(data)
			            $(".headpic").attr("src", "http://localhost:12345/" + data.imgInfo[0].filename)
			        }
			    })
			}
		    // msg.innerHTML = '<a>登录</a><a>免费注册</a>'
		    // 删除cookie
		    // 利用设置有效时间来达到删除的效果
		    // msg.onclick = function(e){
		    // 	e = e || window.event;
		    // 	var target = e.target || e.srcElement;

		    // 	if(target.tagName.toLowerCase() === 'button'){
		    // 		var now = new Date('2017-5-9');

		    // 		document.cookie = 'username=null;expires=' + now.toUTCString();

		    // 		location.href = 'http://localhost/myproject/src/html/list.html';
		    // 	}
		    // }
		    // var msg1 = document.querySelector('.icon1');

		    // // 读取cookie
		    // var cookies = document.cookie;

		    // if (cookies) {
		    //     var arr = cookies.split('; ');

		    //     arr.forEach(function(item) {
		    //         var temp = item.split('=');
		    //         if (temp[0] === 'username') {
		    //             msg1.innerHTML = '欢迎' + temp[1]
		    //         }
		    //     });
		    // }

