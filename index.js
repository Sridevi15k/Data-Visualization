import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js";
const context = document.querySelector("#app-chart").getContext("2d");
let chart = null;
const colors = {
    safari: '#25AEEE',
    chrome: '#FECD52',
    firefox: '#FD344B',
    edge: '#57D269',
}
const render = type => {
    if (chart){
    chart.destroy();
}
    chart = new Chart(context, {
    type: type,
    data: {
        labels: ['Safari', 'Chrome', 'Edge', 'Firefox'],
        datasets: [{
            label: 'Usage stats',
            data: [5.6, 77, 3.4, 14],
            backgroundColor: [
                colors.safari,
                colors.chrome,
                colors.edge,
                colors.firefox
            ],
            borderWidth: 3
        }]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    console.log(type);

}

const chartType = document.querySelector("#chart-type");
chartType.addEventListener("change", event => {
    render(event.currentTarget.value);
});

render(chartType.value);
