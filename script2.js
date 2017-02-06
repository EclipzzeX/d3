d3.csv('Data/bounty.csv', function(error, csv_data) {
 var data = d3.nest()
    .key(function(d) { return d.Date;})
    .rollup(function(d) {
        return d3.sum(d, function(g) {return g.Reward; });
      }
      // totalReward = totalReward + d.values;
    )
    .entries(csv_data);

    data.forEach(function(d) {
      d.Date = d.key;
      d.Reward = d.values;
          console.log("Date: " + d.Date + " Reward : " + d.Reward);

    });
});
