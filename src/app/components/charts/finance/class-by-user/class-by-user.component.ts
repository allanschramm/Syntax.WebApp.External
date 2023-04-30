import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface DataType {
  transactionClass: string;
  classBalance: number;
  classPercentage: number;
}

@Component({
  selector: 'app-class-by-user',
  templateUrl: './class-by-user.component.html',
  styleUrls: ['./class-by-user.component.css']
})
export class ClassByUserComponent implements OnInit {
  public chart: any;
  config: any;

  constructor(private syntaxService: SyntaxService, private authService: AuthService) { }

  ngOnInit(): void {
    const chartData = {
      labels: [],
      datasets: [{
        label: 'Balance',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    this.config = {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Expenses By Class'
          }
        }
      },
    };

    this.createChart();

    this.syntaxService.getTransactionByClassByUser(this.authService.getUserId())
    .subscribe(apiData => {
      const labels = apiData.map((item: DataType) => item.transactionClass);
      const data = apiData.map((item: DataType) => Math.abs(item.classBalance));
  
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = data;
      this.chart.data.datasets[0].label = "Balance";
      this.chart.update();
    });
  }

  createChart() {
    this.chart = new Chart("ExpenseByClass", this.config);
  }
}