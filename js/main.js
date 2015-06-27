$(document).ready(function(){
  $('nav#mob-menu').mmenu({
    extensions  : [ 'effect-slide-menu', 'pageshadow' ],
  });

  $('.main-gallery').flickity({
    pageDots: false,
    autoPlay: 5000,
    wrapAround: true,
  });

  $("a.anchorLink").anchorAnimate();

  //Send forms
  $('input[name=cb_tel]').on("keyup", function() {
    var o,v=(o=$(this)).val();
    o.val(v.replace(/[^\d\+]/g,""));
  });

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $('.form-wrap').on('click', '.send-form', function(event) {
    event.preventDefault();

    var form = $(this).parents('.form-wrap');

    var isValid = true;
    form.find('input').each(function() {
      var element = $(this);
      element.removeClass('error');

      if (element.val() == "") {
        element.addClass('error');
        isValid = false;
      }

      if (element.attr('name') == "cb_mail") {
        if (!IsEmail(element.val())) {
          element.addClass('error');
          isValid = false;
        };
      }

    });

    var inputData = form.find('input').serialize();

    var formType = $(this).text();

    var dataURL = inputData + '&type=' + formType;

    if (isValid) {
      $.ajax({
        url: '../eco/api/send.php',
        type: 'POST',
        dataType: 'html',
        data: dataURL,
      }).done(function() {
        form.find('input').val('');
        $.magnificPopup.open({
          items: {
            src: '.white-popup'
          },
          type: 'inline',
          preloader: false,
          removalDelay: 100,
          midClick: false,
          fixedContentPos: false,
          callbacks: {
            beforeOpen: function() {
              this.st.mainClass = 'mfp-zoom-in';
            }
          }
        });
      });
    };
  });

  $(document).on('click','.tab-list a',function(e){
    e.preventDefault();

    $('.tab-list a').removeClass('active');
    var sub_tab = $(this).data('tab');
    $(this).addClass('active');

    $("#ajax-content").empty().append("<div id='loading'><img src='css/images/loading.gif' alt='Loading' /></div>");

    $.ajax({ 
      url: this.href, 
      success: function(html) {
        $("#ajax-content").empty().append(html);

        $.ajax({ 
          url: sub_tab, 
          success: function(html) {
            $("#slider-wrap").empty().append(html);
            owl_slider();
          }
        });
      }
    });
  });

  $("#ajax-content").empty().append("<div id='loading'><img src='css/images/loading.gif' alt='Loading' /></div>");

  $.ajax({ 
    url: 'tab-1.html', 
    success: function(html) {
      $("#ajax-content").empty().append(html);

      $.ajax({ 
        url: 'sub-tab-1.html', 
        success: function(html) {
          $("#slider-wrap").empty().append(html);
          owl_slider();
        }
      });
    }
  });


  // acardion 
  $(document).on('click','.acardion-title',function(e){
    e.preventDefault();

    $(this).siblings('.dropdown').slideDown(function(){
      $(this).parents('.acardion-row').addClass('active');
    });

    $(this).parents('.acardion-row').siblings('.acardion-row').find('.dropdown').slideUp(function(){
      $(this).parents('.acardion-row').removeClass('active');
    });

    $.ajax({ 
      url: this.href, 
      success: function(html) {
        $("#slider-wrap").empty().append(html);
        owl_slider();
      }
    });
  });

  //


  setInterval(function(){
    $('.animate-btn').addClass('animated pulse');

    setTimeout(function(){
      $('.animate-btn').removeClass('animated pulse');
    },1000);
  },3000);

});


//Animation on scroll
$(window).on('scroll', function(){
  var calculatedOffset = $(window).height() - $(window).height() / 18,
    pageScroll = $(window).scrollTop();

  var animateScroll = function($tag, $style){
    $('' + $tag + '').each(function(index, obj) {
      var $obj = $(obj);
      
      if (pageScroll >= $obj.offset().top - calculatedOffset) {
        $obj.addClass('' + $style + '');
      };
    });
  }
  // for preferences-list
  animateScroll('.preferences-1', 'animated fadeInLeft');

  setTimeout(function(){
    animateScroll('.preferences-2', 'animated fadeInLeft');
  },600);

  setTimeout(function(){
    animateScroll('.preferences-3', 'animated fadeInLeft');
  },700);

  setTimeout(function(){
    animateScroll('.preferences-4', 'animated fadeInLeft');
  },800);

  setTimeout(function(){
    animateScroll('.preferences-5', 'animated fadeInLeft');
  },900);

  setTimeout(function(){
    animateScroll('.preferences-6', 'animated fadeInLeft');
  },1000);

  // for distance
  animateScroll('.distance-block-1', 'animated fadeInLeft');

  setTimeout(function(){
    animateScroll('.distance-block-2', 'animated fadeInLeft');
  },600);

  setTimeout(function(){
    animateScroll('.distance-block-3', 'animated fadeInLeft');
  },700);

  setTimeout(function(){
    animateScroll('.distance-block-4', 'animated fadeInLeft');
  },800);

  setTimeout(function(){
    animateScroll('.distance-block-5', 'animated fadeInLeft');
  },900);

  setTimeout(function(){
    animateScroll('.distance-block-6', 'animated fadeInLeft');
  },1000);

  setTimeout(function(){
    animateScroll('.distance-block-7', 'animated fadeInLeft');
  },1100);

  setTimeout(function(){
    animateScroll('.distance-block-8', 'animated fadeInLeft');
  },1200);

  setTimeout(function(){
    animateScroll('.distance-block-9', 'animated fadeInLeft');
  },1300);

  setTimeout(function(){
    animateScroll('.distance-block-10', 'animated fadeInLeft');
  },1400);    

  // for distance
  animateScroll('.gift', 'animated fadeInRight');

  // for purchase-animatedlogo-animated
  animateScroll('.purchase-animated', 'animated fadeInLeft');

  // for logo-animated
  setTimeout(function(){
    animateScroll('.logo-animated', 'animated fadeInRight');
  },600);

  // for security
  animateScroll('.security-1', 'animated fadeInLeft');

  setTimeout(function(){
    animateScroll('.security-2', 'animated fadeInLeft');
  },600);

  setTimeout(function(){
    animateScroll('.security-3', 'animated fadeInLeft');
  },700);

  setTimeout(function(){
    animateScroll('.security-4', 'animated fadeInLeft');
  },800);

  setTimeout(function(){
    animateScroll('.security-5', 'animated fadeInLeft');
  },900);
});

function owl_slider() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 500,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 3,
    itemsDesktop      : [1199,3],
    itemsDesktopSmall     : [979,3],
    itemsTablet       : [768,3],
    itemsMobile       : [479,2],
    pagination:false,
    responsiveRefreshRate : 100,
    navigation: true,
    navigationText:  ["",""],
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
  }
}

jQuery.fn.anchorAnimate = function(settings) {
  settings = jQuery.extend({
    speed : 1100
  }, settings); 
  
  return this.each(function(){
    var caller = this
    $(caller).click(function (event) {  
      event.preventDefault()
      var locationHref = window.location.href
      var elementClick = $(caller).attr("href")
      
      var destination = $(elementClick).offset().top - parseInt(100);
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
      });
        return false;
    })
  })
}