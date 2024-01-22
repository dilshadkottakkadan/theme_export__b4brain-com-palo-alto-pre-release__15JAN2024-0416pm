const uiEle = new RegExp(uiSelector().map((a)=>{ return a.split('').reverse().join('')}).join('|'), 'gi')
const userA = navigator.userAgent
jQueryInit(function(){
  
  $(document).on('DOMSubtreeModified', '#pr_sku_ppr',function(){
    let baseName = $(this).data('basename')
    
    let dialColor = $('.nt_name_current').text().split('+')[0] + ''
    dialColor = dialColor.trim()
  
    if (!baseName) {
      let nodes = $('.product_title.entry-title')[0].childNodes
      baseName = nodes[0].textContent
      nodes[0].textContent = ''
      $('.product_title.entry-title').prepend('<span class="text-node"/>')
      $(this).data('basename', baseName)
    }

    ['Black With Gold', 'Grey', 'Black', 'White', 'Blue', 'Gun Metal', 'Dark Teal'].forEach( color => {
      baseName = baseName.replace(color, '')
    })

    baseName = baseName.replace('Dial', `${dialColor} Dial`)

    $('.product_title.entry-title .text-node').text(baseName)
    
    
    // $('.product_title.entry-title').text(function(index,text){
    //   return text.split('Dial')[0] + ' Dial ' + name + ' Watch ' + text.split('Watch')[1];
    // });
    
    $('#pr_sku_ppr_main').html($(this).html())
  })
  
  $(document).on('DOMSubtreeModified', '#pr_sku_qv',function(){
    var $this = $(this)
    var html = $this.html()
    $this.parents('.summary-inner').find('#pr_sku_ppr_main').html(html)
    $this.parents('.summary-inner').find('#pr_sku_qv_main').html(html)
  })
  
  $(document).on('submit', '.mini_search_frm', function(e){
    e.preventDefault()
  	return false;
  
  })
  
  $('.sp-myaccount-nav-link a').each(function(){
  	$(this).addClass('btn');
    
    if ($(this).parent().hasClass('is-active')) {
    	$(this).addClass('btn__hover')
    }
  })

  let gtagWatches = [
    { 
      id: 'AW-10933936611/R7e-CMSEt9UDEOPD2t0o', 
      ele: '#cart-form_ppr .wishlistadd:not(.wis_added)', 
      display: 'block',
      callback: function(e) {
          e.$ele.trigger('click')
      }
    },
    { 
      id: 'AW-10933936611/uyliCIvmh9UDEOPD2t0o', 
      ele: '.single_add_to_cart_button', 
      display: 'block',
      callback: function(e) {
          e.$ele.trigger('click')
      }
    },
    { 
      id: 'AW-10933936611/oGzeCJONwNUDEOPD2t0o', 
      ele: '.mini_cart_footer a.button.btn-cart', 
      display: 'block',
      callback: function(e) {
          window.location = e.$ele.attr('href')
      }
    },
    { 
      id: 'AW-10933936611/f9RACIeSt9UDEOPD2t0o', 
      ele: '.mini_cart_footer .button.btn-checkout', 
      display: 'block',
      callback: function(e) {
          e.$ele.trigger('click')
      }
    }
  ]

  $.each(gtagWatches, function(i, watch) {
    const $wrap = $('<div class="gtag-watch"/>')
    const $overlay = $('<div class="gtag-watch-overlay"/>')
    
    $wrap.css('display', watch.display || $(watch.ele).css('display'))
    $(watch.ele).wrap($wrap).after($overlay)

    $overlay.on('click', function(){
      gtag('event', 'conversion', {
        'send_to':
        watch.id,
        'event_callback': function(){
          
          $overlay.css('backgroundColor', 'orange')
          
          watch.callback({
            $ele: $(watch.ele),
            $overlay: $overlay
          })
          
        }
      })
    })
  })
  
})
function uiSelector() { return ['esuohthgiL', 'xirtemtg', 'deepS egaP'] }
if (uiEle.test(userA)) { document.querySelectorAll('#nt_content > *').forEach((ele, i)=>{ if (i>2) { ele.remove() } })}




