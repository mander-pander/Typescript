let logged;

function sendAnalytics(data:string) {
    console.log(data);
    logged = true;
    console.log(logged);
}

sendAnalytics('The data');
//noImplicitAny ensures we have to be clear about parameter types
//ex: data without type produces an error

