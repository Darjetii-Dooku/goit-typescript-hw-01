enum DayOfWeek {
     Monday,
     Tuesday,
     Wednesday,
     Thursday,
     Friday,
     Saturday,
     Sunday
    }
    
    
    const isWeekend = (day) => {
        if (day < 5) {
            return true
        } else { return false}
    }
    console.log(isWeekend(DayOfWeek.Monday));
    