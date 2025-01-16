<script>
    import { onMount } from 'svelte';
    import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js';
    
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);
    
    let chartCanvas;
    let chart;
    
    onMount(() => {
      const ctx = chartCanvas.getContext('2d');
      
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['01 Jan', '05 Jan', '07 Jan', '10 Jan', '15 Jan', '17 Jan', '20 Jan', '25 Jan', '27 Jan', '29 Jan', '31 Jan'],
          datasets: [
            {
              label: 'Total Revenue',
              data: [5000, 10000, 8000, 25000, 3000, 13000, 4000, 3000, 15000, 11000, 20000],
              borderColor: '#3F83F8',
              backgroundColor: '#3F83F8',
              tension: 0,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4,
            },
            {
              label: 'Previous Period',
              data: [4000, 2500, 2500, 2500, 11000, 4000, 4000, 7000, 12000, 3000, 7000],
              borderColor: '#3F83F8',
              borderDash: [5, 5],
              tension: 0,
              borderWidth: 2,
              pointRadius: 0,
              pointHoverRadius: 4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                },
                color: '#6B7280',
              },
            },
            y: {
              position: 'left',
              border: {
                display: false,
              },
              grid: {
                color: '#E5E7EB',
              },
              ticks: {
                stepSize: 25000,
                font: {
                  size: 12,
                },
                color: '#6B7280',
                callback: function(value) {
                  return '$' + value.toLocaleString();
                },
              },
              min: 0,
              max: 100000,
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'start',
              labels: {
                usePointStyle: false, // Removed point style
                boxWidth: 40, // Width of the line in the legend
                padding: 20,
                font: {
                  size: 12,
                },
                color: 'red',
                generateLabels: function(chart) {
                  const datasets = chart.data.datasets;
                  return datasets.map((dataset, i) => ({
                    text: dataset.label,
                    lineDash: dataset.borderDash,
                    strokeStyle: dataset.borderColor,
                    fillStyle: dataset.borderColor,
                    lineWidth: 2,
                    hidden: !chart.isDatasetVisible(i),
                    datasetIndex: i
                  }));
                }
              }
            },
            tooltip: {
              backgroundColor: 'white',
              titleColor: '#111827',
              bodyColor: '#111827',
              bodyFont: {
                size: 12,
              },
              padding: 12,
              borderColor: '#E5E7EB',
              borderWidth: 1,
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                }
              }
            }
          }
        }
      });
      
      return () => {
        chart.destroy();
      };
    });
  </script>
  
  <div class="w-full h-[397px] bg-white">
    <canvas bind:this={chartCanvas}></canvas>
  </div>