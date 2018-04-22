/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


           speechSynthesis.speak(new SpeechSynthesisUtterance('Hello my name is Nathaniel ask me and i will search for informations. my knowledge its based to Wikipedia for now but my creator its preparing an educational system for me.'));
       
            $('#searcher').on('click', function(){
                
               var question =  $('#query').val();
               if(question.length == 0){
                   speechSynthesis.speak(new SpeechSynthesisUtterance('I am afraid that this is not a question. sorry try again.'));
               }else{
                   var arr = question.split(" ");
                   if (arr.length > 0){
                       speechSynthesis.speak(new SpeechSynthesisUtterance(arr[0].toString()));
                       var quer = '';
                       $.each(arr, function (index, value) {
                              switch (value.toLowerCase()) {
                                case "what":{
                                    break; 
                                }
                                case "where":{
                                    break;   
                                }
                                case "at":{
                                    break; 
                                }
                                case "to":{
                                    break;
                                }
                                case "if":{
                                    break; 
                                }
                                case "make":{
                                    break; 
                                }
                                case "want":{
                                    break;   
                                }
                                case "create":{
                                    break;   
                                }
                                case "news":{
                                    break;   
                                }
                                case "about":{
                                    break;   
                                }
                               
                                default:{
                                    quer = quer + '+'+value+'+';
                                     
                                 
                                }
                            } 
                            if(quer.length > 1){
                             
                                $.ajax({
                                url:'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+quer,
                                type:"GET",
                                dataType:"jsonp",   
                                contentType:"application/x-www-form-urlencoded; charset=utf-8",    
                                success:function(data)
                                {
                                    var resulter = data;
                                    
                                   if(typeof(resulter.query.search[0].snippet) != 'undefined'){
                                       var fr = resulter.query.search[0].snippet;
                                       for (var i = 0, max = 10; i < max; i++) {
                                           fr = fr.replace('<span class=\"searchmatch\">','');
                                           fr = fr.replace('</span>',' ');
                                           fr = fr.replace('<p>',' ');
                                           fr = fr.replace('</p>',' ');
                                       }
                                    

                                       speechSynthesis.speak(new SpeechSynthesisUtterance(fr));
                                   }else{
                                       speechSynthesis.speak(new SpeechSynthesisUtterance("sorry cant find answers for that question tag."));
                                   }
                                }
                                
                               });
                            }else{
                                speechSynthesis.speak(new SpeechSynthesisUtterance("sorry cant find answers for that."));
                            }
                            quer = '';
                       });
                       
                   }else{
                       speechSynthesis.speak(new SpeechSynthesisUtterance("sorry cant find answers for that."));
                   }
               }
            });
            
            
       
