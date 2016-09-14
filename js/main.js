$(document).ready(function() {

    mainMenuHover();
    clickLogo();
    clickInput();
    callRightMenu();



    function mainMenuHover() {
        $('#dropdownMenuSystem').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuSystemMenu').css('display','block');
            }
        );
        $('#dropdownMenuCase').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuCaseMenu').css('display','block');
            }
        );
        $('#dropdownMenuResolve').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuResolveMenu').css('display','block');
            }
        );
        $('#dropdownMenuConnect').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuConnectMenu').css('display','block');
            }
        );
        $('#dropdownMenuPrice').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuPriceMenu').css('display','block');
            }
        );
        $('#dropdownMenuPartners').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuPartnersMenu').css('display','block');
            }
        );
        $('#dropdownMenuCompany').hover(
            function() {
                $('.main-menu__links').css('color', '#515F6E');
                $(this).find('.main-menu__links').css('color', '#20242D');
                $('.dropdown-menu').hide();
                $('#dropdownMenuCompanyMenu').css('display','block');
            }
        );
        $('.dropdown-menu').mouseleave(function() {
            $(this).hide();
        })
    }
    function clickLogo() {
        $('.logo__container').click(function() {
            window.location.href = "index.html";
        });
    }
    function clickInput() {
        $('input').focus(function() {
            $('input').css('box-shadow','none');
            $('textarea').css('box-shadow','none');
            $(this).css('background-color','#fff');
            $(this).css('box-shadow','0px 0px 8px 1px #B3DEF0');
        });
        $('textarea').focus(function() {
            $('textarea').css('box-shadow','none');
            $('input').css('box-shadow','none');
            $(this).css('background-color','#fff');
            $(this).css('box-shadow','0px 0px 8px 1px #B3DEF0');
        });
        $('input').focusout(function() {
            $(this).css('box-shadow','none');
            if ($(this).val().length !== 0) {
                $(this).css('background-color','#fff');
                $(this).css('border','1px solid #A6D9ED');
            } else {
                $(this).css('background-color','#F5F5F5');
                $(this).css('border','none');
            }
        });
        $('textarea').focusout(function() {
            $(this).css('box-shadow','none');
            if ($(this).val().length !== 0) {
                $(this).css('background-color','#fff');
                $(this).css('border','1px solid #A6D9ED');
            } else {
                $(this).css('background-color','#F5F5F5');
                $(this).css('border','none');
            }
        });
        $('input').on('input', function() {
            if ($(this).val().length !== 0) {
                $(this).css('font-style', 'normal');
            } else {
                $(this).css('font-style', 'italic');
            }
        });
        $('textarea').on('input', function() {
            if ($(this).val().length !== 0) {
                $(this).css('font-style', 'normal');
            } else {
                $(this).css('font-style', 'italic');
            }
        });
    }
    function callRightMenu() {
        $(".toggle_mnu").click(function () {
            $(".sandwich").toggleClass("active");
            $("body").toggleClass('active-nav');
        });

        $(".main").click(function() {
            $(".sandwich").removeClass("active");
            $("body").removeClass('active-nav');
        });
        $(".panel-nav a").click(function(){
            $(".sandwich").removeClass("active");
            $("body").removeClass('active-nav');
        });
    }

    $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );




});
