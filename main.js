$(function(){
    let $menu = $('nav li');
    let $section = $('section');
    let secCount = $section.length;
    console.log(secCount);

    // 마우스 휠 이벤트
    $section.on("mousewheel",function(event,delta){
        if (delta > 0){
            //마우스 휠을 올렸을때 실행할 구문
            let prev = $(this).prev().offset().top;
            $('html, body').stop(true).animate({scrollTop: prev});

            let prevIdx = $(this).prev().index() - 1;
            console.log(prevIdx);
            if (prevIdx < 0){
                prevIdx == 0;
                $menu.eq(0).addClass('on');
            } else {
                $menu.removeClass('on');
                $menu.eq(prevIdx).addClass('on');
            }

        } else if (delta < 0){
            //마우스 휠을 내렸을때 실행할 구문
            let next = $(this).next().offset().top;
            $('html, body').stop(true).animate({scrollTop: next});

            let nextIdx = $(this).index();
            // console.log(nextIdx);
            if (nextIdx > secCount - 1) {
                nextIdx == secCount - 1;
                $menu.eq(secCount - 1).addClass('on');
            } else {
                $menu.removeClass('on');
                $menu.eq(nextIdx).addClass('on');
            }
        }
    });

    // 클릭이벤트
    $menu.click(function(event){
        // 기본이벤트 삭제
        event.preventDefault();
        // 클릭한 li에 on 클래스 추가
        $menu.removeClass('on');
        $(this).addClass('on');

        let offY = $($(this).find('a').attr('href')).offset().top;
        // console.log(offY);
        $('html, body').stop(true).animate({scrollTop:offY});
    });

    // 강제이벤트
    $menu.eq(0).trigger('click');
//-----------------------
});