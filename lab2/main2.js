$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    let topicCount =topic.length;
    let millisecsPerDay= 24*60*60*1000;
    for(let x=0;x<topicCount;x++){
        let d=new Date (startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString()
        let tradeDate = d.split('/');
        let month = tradeDate[1]
        let date = tradeDate[2]
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${month+"/"+date}</td>`+
            `<td>${topic[x]}</td>`
        )
    }
});