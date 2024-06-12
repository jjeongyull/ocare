
$(function(){
    $(".name").keyup(function () {
         regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
         v = $(this).val();
         if (regexp.test(v)) {
             alert("한글만 입력가능 합니다.");
             $(this).val(v.replace(regexp, ''));
         }
     });

     
     $(".tel").keyup(function () {
        regexp = /[^0-9]/g,'';
        v = $(this).val();
        if (regexp.test(v)) {
            alert("숫자만 입력가능 합니다.");
            $(this).val(v.replace(regexp, ''));
        }
    });

});



/*빈칸 체크*/
$(function(){
    $(".btn-primary").click(function(){

        const name = $('.name').val();
        const email = $('.email').val()
        var email_rule =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const tel = $('.tel').val();
        const textarea = $('.textarea').val();
        let check = $("input:checkbox[name=checkbox]").is(":checked");


            if (name == "") {
                alert('이름을 입력해주세요.'); 
                return  false;
            }
            
            if (email == "") {
                alert('이메일을 입력해주세요.');   
                return  false;
            }
            
            if(!email_rule.test(email)){
                alert("이메일을 형식에 맞게 입력해주세요.");
              return false;
            }
                                  
            if (tel == "") {
                alert('전화번호를 입력해주세요.'); 
                return  false;
            }
            
            if (textarea == "") {
                alert('문의내용을 입력해주세요.'); 
                return  false;
            }

            var cont = document.getElementById("textarea");
            if(cont.value.length < 30) {
                cont.value =  cont.value.substr(0, 20);
                alert('문의사항은 30글자이상 작성해주셔야합니다.');
                return false;
            }
        
            if (!check) {
                alert("개인정보처리방침 동의는 필수사항 입니다.");    
                return  false;
            } 
   

    });


});




