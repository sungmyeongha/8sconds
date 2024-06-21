
let ssf_click_search = document.getElementsByClassName('ssf_click_search')[0];
let search_page =  document.getElementsByClassName('search_page')[0];
let x_ssf =  document.getElementsByClassName('x_ssf')[0];

ssf_click_search.addEventListener('click' , function(){
    search_page.style.display="block"

})
x_ssf.addEventListener('click' , function(){
    search_page.style.display="none"

})

let search_8_box =  document.getElementsByClassName('search_8_box')[0];
let main_click_search =  document.getElementsByClassName('main_click_search')[0];

let search_8_txt =  document.getElementsByClassName('search_8_txt')[0];
let search_8_msg =  document.getElementsByClassName('search_8_msg')[0];
let search_box =  document.getElementsByClassName('search_8_msg_box')[0];
let search_x =  document.getElementsByClassName('search_x')[0];
let click_search = search_8_msg.firstElementChild;


main_click_search.addEventListener("click", function(e) {
search_8_txt.style.display='block'
search_box.style.display='block'

search_box.classList.remove('display');
search_box.classList.add('display');



main_click_search.style.pointerEvents= "none"
click_search.classList.remove("width");
search_8_txt.classList.remove("opacity");

search_8_msg.offsetWidth = search_8_msg.offsetWidth;
search_8_txt.offsetWidth = search_8_txt.offsetWidth;


click_search.classList.add("width");
search_8_txt.classList.add("opacity");


}, false);



search_x.addEventListener('click' , function(){
    main_click_search.style.pointerEvents= "auto"
    search_8_txt.style.display='none'
    search_box.style.display='none'
})