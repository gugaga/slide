// setTimeout(function(){
//     $('.inner>img:nth-child(1)').css({transform:'translateX(-100%)'})
//     $('.inner>img:nth-child(2)').css({transform:'translateX(-100%)'})
//     $('.inner>img:nth-child(1)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'});
//     })
// },3000)
// setTimeout(function(){
//     $('.inner>img:nth-child(2)').css({transform:'translateX(-200%)'})
//     $('.inner>img:nth-child(3)').css({transform:'translateX(-100%)'})

//     $('.inner>img:nth-child(2)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'});
//     })
// },6000)
// setTimeout(function(){
//     $('.inner>img:nth-child(3)').css({transform:'translateX(-200%)'})
//     $('.inner>img:nth-child(4)').css({transform:'translateX(-100%)'})

//     $('.inner>img:nth-child(3)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'});
//     })
// },9000)
// setTimeout(function(){
//     $('.inner>img:nth-child(4)').css({transform:'translateX(-200%)'})
//     $('.inner>img:nth-child(5)').css({transform:'translateX(-100%)'})

//     $('.inner>img:nth-child(4)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'});
//     })
// },12000)

// setTimeout(function(){
//     $('.inner>img:nth-child(5)').css({transform:'translateX(-200%)'})
//     $('.inner>img:nth-child(1)').css({transform:'translateX(-100%)'})

//     $('.inner>img:nth-child(5)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'});
//     })
// },15000)

// ②简化
let n = 1;
function x(n){
    if(n>5){
        n = n%5;
        if(n === 0){
            n = 5;
        }
    }

    return n;
}


$('.inner >img:nth-child(1)').addClass('current');
$('.inner >img:nth-child(2)').addClass('enter');
setInterval(()=>{
    $(`.inner >img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend',(e) => {
        $(e.currentTarget).removeClass('leave').addClass('enter');
    });
    $(`.inner >img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current');
    n += 1;
},3000);
//①简化
// setTimeout(()=>{
//     $('.inner >img:nth-child(2)').removeClass('current').addClass('leave')
//     .one('transitionend',(e) => {
//         $(e.currentTarget).removeClass('leave').addClass('enter');
//     });
//     $('.inner >img:nth-child(3)').removeClass('enter').addClass('current');
// },6000);
// setTimeout(()=>{
//     $('.inner >img:nth-child(3)').removeClass('current').addClass('leave')
//     .one('transitionend',(e) => {
//         $(e.currentTarget).removeClass('leave').addClass('enter');
//     });
//     $('.inner >img:nth-child(4)').removeClass('enter').addClass('current');
// },9000);

// setTimeout(()=>{
//     $('.inner >img:nth-child(4)').removeClass('current').addClass('leave')
//     .one('transitionend',(e) => {
//         $(e.currentTarget).removeClass('leave').addClass('enter');
//     });
//     $('.inner >img:nth-child(5)').removeClass('enter').addClass('current');
// },12000);

// setTimeout(()=>{
//     $('.inner >img:nth-child(5)').removeClass('current').addClass('leave')
//     .one('transitionend',(e) => {
//         $(e.currentTarget).removeClass('leave').addClass('enter');
//     });
//     $('.inner >img:nth-child(1)').removeClass('enter').addClass('current');
// },15000);

