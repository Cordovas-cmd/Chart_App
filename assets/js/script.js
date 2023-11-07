var canvas = document.getElementById('chartContainer');



var context = canvas.getContext('2d');

// set the context and properties for the new chart
new Chart(context, {
    type: 'bar',
    data: {
        labels: [
            'Excel',
            'Web Development',
            'Machine Learning'
        ],
        datasets: [
            {
                label: 'Number of people with skillset',
                data: [12, 12, 3]
            }
        ]
    }
})