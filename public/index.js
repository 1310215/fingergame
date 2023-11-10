var start =document.getElementById('start');

// start.addEventListener('click',() => {
//     var interval = 1200;
//     var intervalId = setInterval(() => {
//         var left = NumToFinger(Math.floor(Math.random() * (5)));
//         var right = NumToFinger(Math.floor(Math.random() * (5)));
//         document.getElementById('left').innerHTML = left;
//         document.getElementById('right').innerHTML = right;
//     },interval);
//     setTimeout(()=>{
//         clearInterval(intervalId)
//         document.getElementById('left').innerHTML = "";
//         document.getElementById('right').innerHTML = "";
//     },interval*30);
// });

start.addEventListener('click',() => {
    var interval = Number(document.getElementById('interval').value);
    var count=0,frequency=Number(document.getElementById('frequency').value);
    // console.log(interval*10);
    document.getElementById('time').innerHTML = interval*frequency+'秒';
    var intervalId = setInterval(() => {
        var left = NumToFinger(Math.floor(Math.random() * (5)));
        var right = NumToFinger(Math.floor(Math.random() * (5)));
        document.getElementById('left').innerHTML = left;
        document.getElementById('right').innerHTML = right;
        count++;
        if (count>=frequency) {   
            clearInterval(intervalId)
            document.getElementById('left').innerHTML = "";
            document.getElementById('right').innerHTML = "";
            document.getElementById('time').innerHTML = "";
        }
    },interval*100*frequency);
});


function NumToFinger (x) {
    switch(x) {
        case 0:
            return "親指";
        case 1:
            return "人差し指";
        case 2:
            return "中指";
        case 3:
            return "薬指";
        case 4:
            return "小指";
    }
}