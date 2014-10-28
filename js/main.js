$(function(){
    
    var obj=[];
    var story= ["There once was a #adj# princess who lived in a tall #noun#. Every day she would #verb# down her hair and hope that a #adv# #adj2# prince would come and take her away.", "You wouldn't know to look at me, but I used to be a #noun#. When I was a #adj# boy, I used to #verb# every day. #adv# this gave me the skills for a #adj2# career in the field.", "I'm walking through the #noun#, when #adv# I am attacked by a #adj# bear. I #verb# at it and luckily it got #adj2# and left."];
    var str ="";
    
    $("form").submit(function(event){
        event.preventDefault();
    
    obj={
        "adj":$("#adj").val(),
        "verb":$("#verb").val(),
        "noun":$("#noun").val(),
        "adv":$("#adv").val(),
        "adj2":$("#adj2").val()
    }
    str=story[Math.floor(story.length* Math.random())]
    madLibIt(obj,str);
    })
 
    function madLibIt(obj,str){
        var regs = [] ;
        var props =  Object.keys(obj);
        props.forEach(function(elem, index) {

regs[index]= new RegExp("#"+elem+"#","g");
    str = str.replace(regs[index], obj[elem]);
                     
        })
        $("#bottom").text(str);  
        
    }
    
});