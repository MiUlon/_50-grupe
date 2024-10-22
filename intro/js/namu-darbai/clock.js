for (let hour = 0; hour <= 1; hour++) {
    for (let minute = 0; minute <= 59; minute++) {      
        for (let second = 0; second <= 59; second++) {
            if (minute < 10 && second < 10) {
                console.log(hour + ':0' + minute + ':0' + second);
            } else if (minute < 10 && second > 10) {
                console.log(hour + ':0' + minute + ':' + second);
            } else if (minute > 10 && second < 10) {
                console.log(hour + ':' + minute + ':0' + second);
            } else {
                console.log(hour + ':' + minute + ':' + second);
            };
        };
    };
};