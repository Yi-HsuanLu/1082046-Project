let topic = [
    "尚未開學",
    "國定假日",
    "課程介紹",
    "Lab1",
    "Lab2",
    "Lab3",
    "Lab4",
];
let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    //StartMonth要減1(bug)
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(2,14);