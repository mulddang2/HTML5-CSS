$('.btn span').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})