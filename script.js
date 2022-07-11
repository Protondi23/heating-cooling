let actualTemp = 77;
let desireTemp = 80;
if(actualTemp < desireTemp){
    console.log("Run heat");
} else if (actualTemp === desireTemp){
    console.log("Standby");
} else {
    console.log("Run A/C");
}


// for loop
// counts from 1 to 5

for (let i = 1; i <= 5 ; i++) {
    console.log(i);
}

//from 5 to 0
for(let i = 5; i >= 0; i--){
    console.log(i);
}

//from 2-10 evens only

for(let i = 2; i <= 10; i += 2){
    console.log(i);
}