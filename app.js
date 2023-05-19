const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    // console.log(question);
    const btn =question.querySelector('.btn');
    console.log(btn);
});


// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question= e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');

//     });


// })