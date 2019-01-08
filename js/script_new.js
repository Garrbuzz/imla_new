
// $(document).ready(function(){
//   $('body').append('<a href="#" id="go-top" ><span class="up">Нагору</span></a>');

// });

// $(function() {
//  $.fn.scrollToTop = function() {
//   $(this).hide().removeAttr("href");
//   if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
//   var scrollDiv = $(this);
//   $(window).scroll(function() {
//    if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
//    else $(scrollDiv).fadeIn("slow")
//   });
//   $(this).click(function() {
//    $("html, body").animate({scrollTop: 0}, "slow")
//   })
//  }
// });

// $(function() {
//  $("#go-top").scrollToTop();
// });

window.onload = function (){
  var st1 = document.querySelector('#st-1');
  var i = 1;
  var srikeDelay = 1000;
  st1.classList.add('strike-paused');

   while (i<10){
  	srikeDelay = Math.round(Math.random()*60)*300;
  	strike(st1, function(){
  		st1.classList.toggle('strike-paused');
  		st1.classList.toggle('strike');
  	})
  	console.log(i);
  	i++;
  }

  function strike(elem, funk){
  	var callback = funk;
  	console.log(elem);
  	setTimeout(function(){
  		elem.classList.toggle('strike-running');
  		elem.classList.toggle('strike');
  		callback.call(elem);

  		}, srikeDelay);
  	}
  }



function clickMember(m){
	var inh = '';

	document.getElementById('m').style.display='block';
	
	 if (m == 'member1'){
	 	inh = '<div class = "x" id="x" onClick="closeModal()"><div>X</div></div>';
	 	inh=inh + '<div class ="img-modal"><img src="img/andru2.png" alt="" ></div>';
	 	inh = inh + '<div class="content-modal"><p>Мене звуть Андрій Орищенко. Я народився та виріс в Києві. Життя вимагало різних активностей, але музика була завжди, й завжди на першому місці.</p>';
	 	inh = inh + '<p>Еволюція музичнтх вподобань була такою:</p>';
	 	inh = inh + '<p>Назарій Яремчук, Queen, Space, Abba, Pink Floyd, Porcupain Tree, Jai Uttal, Kasabian.</p></div>';

	 	document.getElementById('mv').innerHTML = inh;
	 } else if (m == 'member2'){
	 	inh = '<div class = "x" id="x" onClick="closeModal()"><div>X</div></div>';
	 	inh=inh + '<div class ="img-modal"><img src="img/andru2.png" alt="" ></div>';
	 	inh = inh + '<div class="content-modal"><p>Мене звуть Андрій Орищенко. Я народився та виріс в Києві. Життя вимагало різних активностей, але музика була завжди, й завжди на першому місці.</p>';
	 	inh = inh + '<p>Еволюція музичнтх вподобань була такою:</p>';
	 	inh = inh + '<p>Назарій Яремчук, Queen, Space, Abba, Pink Floyd, Porcupain Tree, Jai Uttal, Kasabian.</p></div>';

	 	document.getElementById('mv').innerHTML = inh;
	 }
	 else if (m == 'member3'){
	 	inh = '<div class = "x" id="x" onClick="closeModal()"><div>X</div></div>';
	 	inh=inh + '<div class ="img-modal"><img src="img/andru2.png" alt="" ></div>';
	 	inh = inh + '<div class="content-modal"><p>Мене звуть Андрій Орищенко. Я народився та виріс в Києві. Життя вимагало різних активностей, але музика була завжди, й завжди на першому місці.</p>';
	 	inh = inh + '<p>Еволюція музичнтх вподобань була такою:</p>';
	 	inh = inh + '<p>Назарій Яремчук, Queen, Space, Abba, Pink Floyd, Porcupain Tree, Jai Uttal, Kasabian.</p></div>';

	 	document.getElementById('mv').innerHTML = inh;
	 }
	 else if (m == 'member4'){
	 	inh = '<div class = "x" id="x" onClick="closeModal()"><div>X</div></div>';
	 	inh=inh + '<div class ="img-modal"><img src="img/andru2.png" alt="" ></div>';
	 	inh = inh + '<div class="content-modal"><p>Мене звуть Андрій Орищенко. Я народився та виріс в Києві. Життя вимагало різних активностей, але музика була завжди, й завжди на першому місці.</p>';
	 	inh = inh + '<p>Еволюція музичнтх вподобань була такою:</p>';
	 	inh = inh + '<p>Назарій Яремчук, Queen, Space, Abba, Pink Floyd, Porcupain Tree, Jai Uttal, Kasabian.</p></div>';

	 	document.getElementById('mv').innerHTML = inh;
	 }
	
}
function closeModal(){
	document.getElementById('m').style.display='none';
	
}

