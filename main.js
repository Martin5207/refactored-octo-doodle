/* https://teachablemachine.withgoogle.com/models/WAnK1IN31/ */
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    
    });
    camera=document.getElementById("camera")
    Webcam.attach("#camera")
    function take_snapshot(){{
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
        })
    }}
    console.log("ml5version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WAnK1IN31/model.json",modelready)
    
    function modelready(){
        console.log("modleisreadytofire")
    }
    
    
    
    
    p1="";
    p2="";
    
    
    function gotresult(eroor,results){
        if(eroor){
            console.error(eroor)
        }
         console.log(results)          ;
         document.getElementById("rezult_emoshion_name").innerHTML=results[0].label               ;
         document.getElementById("rezult_emoshion_name1").innerHTML=results[1].label;
         p1=results[0].label
         p2=results[1].label
         speak()
         if(p1=="palm"){
            document.getElementById("update_emoji").innerHTML="&#9995;"
            
         }
         if(p1=="fist"){
            document.getElementById("update_emoji").innerHTML="&#9994;"
            
         }
        
        if(p1=="2"){
           document.getElementById("update_emoji").innerHTML="&#9996;"
           
        
    }
    
    if(p2=="palm"){
        document.getElementById("update_emoji1").innerHTML="&#9995;"
        
     }
     if(p2=="fist"){
        document.getElementById("update_emoji1").innerHTML="&#9994;"
        
     }
    
    if(p2=="2"){
       document.getElementById("update_emoji1").innerHTML="&#9996;"
       
    
    }
    
    }
    function speak(){
        var synth=window.speechSynthesis;
       sd1="the frist prediction is "+p1;
       sd2="the seconed prediction is "+p2 
       var utterthis=new SpeechSynthesisUtterance(sd1+sd2);
       synth.speak(utterthis)
    }
    
    
    