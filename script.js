countingF = 0;

d3.csv('Data/bounty.csv', function(data) {
    var totalReward = [d3.sum(data.map(function(d){
        countingF++;
        return +d.Reward

        }
          )
        ),
        d3.sum(data)
    ];
    console.log('Total: ' + totalReward + ' Count: ' + countingF);
});
