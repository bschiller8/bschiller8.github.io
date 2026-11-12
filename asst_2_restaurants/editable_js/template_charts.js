/**
 * CHARTS VIEW - STUDENTS IMPLEMENT
 * Show patterns in your data as charts, using Chart.js
 *
 * This view has two parts:
 *   showCharts(data) returns the HTML: one <canvas> per chart, with a text alternative under each
 *   drawCharts(data) runs after that HTML is on the page, and draws a chart into each <canvas>
 *
 * Chart.js docs: https://www.chartjs.org/docs/latest/getting-started/
 */

function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}


function showCharts(data) {
  // TODO: Replace each TODO sentence below with text that says what that chart shows.
  // Charts are drawn as pictures, so screen readers can't read them.
  /*html*/
  return `
                <h2 class="view-title">📈 Charts View</h2>
                <p class="view-description">Patterns in the data at a glance</p>
                <div class="todo-implementation">
                    <h3>TODO: Implement Charts View</h3>
                    <p><strong>Your task:</strong> Draw at least two charts of different types, each answering a different question</p>
                    <p><strong>Good for:</strong> Spotting patterns, comparing groups, seeing distributions</p>
                    <p><strong>Records available:</strong> ${data.length} items to chart</p>
                </div>
                <div class="charts-grid">
                    <figure class="chart-figure">
                        <canvas id="chart-one"></canvas>
                        <figcaption class="chart-summary">Chain fast food businesses had the most inspections: 29 of the 150 inspections in this dataset.</figcaption>
                    </figure>
                    <figure class="chart-figure">
                        <canvas id="chart-two"></canvas>
                        <figcaption class="chart-summary">“Non-Compliant - Violations Observed” was the most common reported outcome which accounted for 42 of the 150 inspections.</figcaption>
                    </figure>
                </div>
            `;
}

function drawCharts(data) {
  // Chart.js is loaded by a <script> tag in index.html. If it didn't load, say so instead of breaking.
  if (typeof Chart === 'undefined') {
    document.querySelector('.charts-grid').innerHTML =
      '<p class="error">Chart.js did not load, so the charts can\'t be drawn. Check the &lt;script&gt; tag in index.html.</p>';
    return;
  }

  // TODO 1: Reshape your data for the first chart.
  // Chart.js doesn't take your array of records.
  // It wants a list of labels and a matching list of numbers.
  // Example: count inspections by type of business.
  //
     const counts = {};
     data.forEach((inspection) => {
      const businessType = orNotListed(inspection.category);
       counts[businessType] = (counts[businessType] || 0) + 1;
     });

     const labels = Object.keys(counts);
     const numbers = Object.values(counts);

  // TODO 2: Draw the first chart into <canvas id="chart-one">.
  // Every chart needs a title, and every axis needs a label.
  //
     new Chart(document.querySelector('#chart-one'), {
       type: 'bar',
       data: {
         labels: labels,
         datasets: [{ label: 'Number of inspections', data: numbers }]
       },
       options: {
        aspectRatio: 1, //added so that the chart fills the whole container 
         plugins: { 
          title: { 
            display: true, 
            text: 'Inspections by type of business' } },
         scales: {
           x: { 
            title: { 
            display: true, 
            text: 'Type of business' } },
           y: { 
            title: { 
            display: true, 
            text: 'Inspections' }, 
            beginAtZero: true, 
            ticks: {
              stepSize: 1 //added so that the axis counts by 1 (charts.js still hides some numbers if the chart is too small to show all of them)
            }
          }
         }
       }
     });

  // TODO 3: Reshape your data again, and draw a second chart of a DIFFERENT type
  // (pie, line, scatter...) into <canvas id="chart-two">, answering a different question.
  // Ideas: inspection results as a pie, inspections per month as a line,
  // or how many "Out of Compliance" checks each type of business averages.

  //CHART 2
  const inspectionOutcome = {};

  data.forEach((inspection) =>{
    const outcome = orNotListed(inspection.inspection_results);
    inspectionOutcome[outcome] = (inspectionOutcome[outcome] || 0) + 1;
  });

  const outcomeLabels = Object.keys(inspectionOutcome);
  const outcomeNumbers = Object.values(inspectionOutcome);

  new Chart(document.querySelector('#chart-two'), {
    type: 'pie',
    data: {
      labels: outcomeLabels,
      datasets: [{ 
        label: 'Number of inspections', 
        data: outcomeNumbers }]
    },
    options: {
      plugins: { 
        title: { 
          display: true, 
          text: 'Inspection Outcomes' 
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});

}

export { showCharts, drawCharts };
