d3.csv('Data/bounty.csv', function (error,data) {

    var data1 = d3.nest()
      .key(function(d) { return d.Date;})
      .rollup(function(d) {
          return d3.sum(d, function(g) {return g.Reward; });
        }
        // totalReward = totalReward + d.values;
      )
      .entries(data);

      data1.forEach(function(d) {
          d.Date = d.key;
          d.Reward = d.values;
          var table = d3.select('body').append('table')
      		var thead = table.append('thead')
      		var	tbody = table.append('tbody');

          thead.append('tr')
            .selectAll('th')
            //.data(columns).enter()
            .append('th')
              .text("Date","Reward");

          var rows = tbody.selectAll('tr')
            .data(data1)
            .enter()
            .append('tr');

          var cells = rows.selectAll('td')
            .data(function (row) {
                return columns.map(function (column) {
                  return {column: column, value: row[column]};
                });
              })
            .enter()
            .append('td')
              .text(function (d) { return d.value; });
        
            return table;
      console.log("Date: " + d.Date + " Reward : " + d.Reward);
    });

  function tabulate(data, columns) {
		var table = d3.select('body').append('table')
		var thead = table.append('thead')
		var	tbody = table.append('tbody');

		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;
	}

	// render the table(s)
	tabulate(data, ['Date','Time','Reward','Total','name','Wing']); // 2 column table

});
