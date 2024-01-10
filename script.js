document.addEventListener('DOMContentLoaded', function () {
    

    
    var sendButton = document.getElementById('button');

    
    sendButton.addEventListener('click', function () {
        
        var name = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;

       
        var option = document.querySelector('select').value;

        
        var recommendation = document.querySelector('input[name="recommendation"]:checked');
        recommendation = recommendation ? recommendation.value : 'Not selected';

        
        var languages = document.querySelectorAll('input[name="language"]:checked');
        var languageList = Array.from(languages).map(function (language) {
            return language.value;
        }).join(', ');

        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Age:', age);
        console.log('Best option describes you:', option);
        console.log('Would you recommend this site?', recommendation);
        console.log('Languages and Frameworks known:', languageList);
    });
});