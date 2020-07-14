 //all the buttons
            var button1 = document.getElementsByClassName("button1");
            var button2 = document.getElementsByClassName("button2");
            var button3 = document.getElementsByClassName("button3");
            var button4 = document.getElementsByClassName("button4");
            var homeButton = document.getElementsByClassName("home-button");
            
            //store all the pages
            var page1 = document.getElementById("page1");
            var page2 = document.getElementById("page2");
            var page3 = document.getElementById("page3");
            var page4 = document.getElementById("page4");
            var homePage = document.getElementById("home");
            
            //these are the different functions for the different buttons. they set there pages display to "block" and all the rest "none".
            var about = function(){
                homePage.style.display = "none";
                page1.style.display = "block";
                page2.style.display = "none";
                page3.style.display = "none";
                page4.style.display = "none";
            };
            var projects = function(){
                homePage.style.display = "none";
                page1.style.display = "none";
                page2.style.display = "block";
                page3.style.display = "none";
                page4.style.display = "none";
            };
            var more = function(){
                homePage.style.display = "none";
                page1.style.display = "none";
                page2.style.display = "none";
                page3.style.display = "block";
                page4.style.display = "none";
            };
            /*optional fourth page
            var optional = function(){
                homePage.style.display = "none";
                page1.style.display = "none";
                page2.style.display = "none";
                page3.style.display = "none";
                page4.style.display = "block";
            };*/
            var home = function(){
                homePage.style.display = "block";
                page1.style.display = "none";
                page2.style.display = "none";
                page3.style.display = "none";
                page4.style.display = "none";
            };
            
            //set it to the home page first
            home();
            
            //monitor the other buttons to see if they have been clicked
            for(var i = 0; i < button1.length; i  ++){
                button1[i].addEventListener("click",about);
            }
            for(var i = 0; i < button2.length; i  ++){
                button2[i].addEventListener("click",projects);
            }
            for(var i = 0; i < button3.length; i  ++){
                button3[i].addEventListener("click",more);
            }
            //optional fourth page
            /*for(var i = 0; i < button1.length; i  ++){
            button4.addEventListener("click",optional);
            }*/
            for(var i = 0; i < homeButton.length; i  ++){
                homeButton[i].addEventListener("click",home);
            }
            