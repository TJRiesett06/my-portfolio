let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
function onclick(button) {

    setTimeout(() => {
        if(numbers.length > 0){
            const randomNumber = numbers.pop();
            //button.textContent = randomNumber;
            //console.log(randomNumber);

            let r = Math.random() * 10;

            if (r < 2.0){
                button.style.backgroundColor = "rgb(30, 30, 30)";
                button.style.border = "none";
                button.style.boxShadow = "9px 8px 4px rgb(50, 50, 50) inset";
                button.style.color = "rgb(30, 30, 30)";
                //button.style.margin = "0px 2px 2px";
                //button.style.transform = "translateY(-30px)"; /* Adjust this value to control the intrusion */


                let r4 = Math.random() * 10;

                if (r4 < 1.5)
                {
                    let li = document.createElement("li");
                    li.innerHTML = "Going clockwise name all the Home Alone traps.";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                else if (r4 >= 1.5 && r4 < 3.0)
                {
                    let li = document.createElement("li");
                    li.innerHTML = "Going clockwise name all of Santa's reindeers.";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                else if (r4 >= 3.0 && r4 < 4.5)
                {
                    let li = document.createElement("li");
                    li.innerHTML = "Going clockwise name as many Christmas movies as possible without stopping to think.";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                else if (r4 >= 4.5 && r4 < 6.0){
                    let li = document.createElement("li");
                    li.innerHTML = "Going clockwise name the 12 days of christmas items starting 1 - 12.";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                else if (r4 >= 6.0 && r4 < 7.5){
                    let li = document.createElement("li");
                    li.innerHTML = "Going clockwise rhyme as many words with jingle as possible without stopping to think.";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                else if (r4 >= 7.5 && r4 < 9){
                    let li = document.createElement("li");
                    li.innerHTML = "Going clockwise name as many christams songs as possible without stopping to think.";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                else {
                    let li = document.createElement("li");
                    li.innerHTML = "Group Drink!";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";

                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                }
                //console.log(r);
                //console.log(numbers);
                /*
                if(randomNumber == 25){
                    console.log("triggered");
                }
                */
            }
            else if (r >= 2.0 && r < 4.5){
                button.style.backgroundColor = "rgb(30, 30, 30)";
                button.style.border = "none";
                button.style.boxShadow = "9px 8px 4px rgb(50, 50, 50) inset";
                button.style.color = "rgb(30, 30, 30)";
                //button.style.margin = "0px 2px 2px";
                //let li = document.createElement("li");
                //li.textContent = "Penalty";
                //document.getElementById("output").appendChild(li).style.listStyleType = "initial";
                //console.log(r);
                //console.log(numbers);
                let r3 = Math.random() * 10;

                if(r3 < 3){

                    let li = document.createElement("li");
                    li.innerHTML = "Drink!";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";
                    document.getElementById("output").appendChild(li).style.color = "red";
                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                    console.log(r3);
                    //count1++;
                    //count1++;
                    //console.log(count1);
                }
                else if (r3 >= 3 && r3 < 6){

                    let li = document.createElement("li");
                    li.innerHTML = "-$2";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";
                    document.getElementById("output").appendChild(li).style.color = "red";
                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                    console.log(r3);
                    count3 += 2;
                    //console.log(count2);
                }
                else
                {
                    let li = document.createElement("li");
                    li.innerHTML = "-$1";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";
                    document.getElementById("output").appendChild(li).style.color = "red";
                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                    console.log(r3);
                    count4 ++;
                    //console.log(count2);
                }
            }
            else {
                button.style.backgroundColor = "rgb(30, 30, 30)";
                button.style.border = "none";
                button.style.boxShadow = "9px 8px 4px rgb(50, 50, 50) inset";
                button.style.color = "rgb(30, 30, 30)";

                //button.style.margin = "0px 2px 2px";
                //console.log(r);
                //console.log(numbers);

                let r2 = Math.random() * 10;

                if(r2 < 5){

                    let li = document.createElement("li");
                    li.innerHTML = "$1";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";
                    document.getElementById("output").appendChild(li).style.color = "green";
                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                    //console.log(r2);
                    //count1++;
                    count1++;
                    //console.log(count1);
                }
                else {

                    let li = document.createElement("li");
                    li.innerHTML = "$2";
                    document.getElementById("output").appendChild(li).style.listStyleType = "initial";
                    document.getElementById("output").appendChild(li).style.color = "green";
                    document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
                    //console.log(r2);
                    count2 += 2;
                    //console.log(count2);
                }
            }
            button.disabled = true;
        }

        if(numbers.length === 0){
            setTimeout(() => {
            console.log("end of numbers");
            let total = (count1 + count2) - (count3 + count4);
            let li = document.createElement("li");
            li.textContent = "Total Winnings!: " + "$" + total;
            document.getElementById("output").appendChild(li).style.listStyleType = "initial";
            document.getElementById("maintextrewards").scrollTop = li.offsetHeight + li.offsetTop;
            console.log(total);
            }, 500);
        }
    }, 250);

}

const numbers = Array.from({length:25}, (_,i) => i + 1);
numbers.sort(() => Math.random() - 0.5);

const buttons = document.querySelectorAll('.internal-box');
//const buttons2 = document.querySelectorAll('.box');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.disabled) return;
        onclick(button);

    });
});


/*
    var randomnum = (Math.round(Math.random() * 24) + 1);
    var r = document.getElementById("internal-box").addEventListener = randomnum;
    document.getElementById("internal-box").innerHTML = randomnum;


    const randoms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

    for(i = 0; i < randoms.length; i++){
        const index = randoms.indexOf(i + 1);

        if (randoms[i] == r){
            randoms.splice(index, 1);
        }
    }

    if (r == 2 || r == 13) {
        document.getElementById("internal-box").style.backgroundColor = "red";
    }

    console.log(r);
    console.log(randoms);
    */
