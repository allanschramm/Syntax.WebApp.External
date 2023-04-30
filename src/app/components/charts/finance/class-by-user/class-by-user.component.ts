import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface TypeQuantity {
  type: number;
  quantity: number;
  balance: number;
}

interface typePercentages {
  percentage: string;
  type: string;
}

interface DataType {
  totalBalance: number;
  transactionClass: string;
  totalQuantity: number;
  typePercentages: typePercentages[];
  typeQuantity: TypeQuantity[];
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
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
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
        }
      },
    };

    this.createChart();

    this.syntaxService.getTransactionByClassByUser(this.authService.getUserId())
    .subscribe(apiData => {
      const labels = apiData.map((item: DataType) => item.transactionClass);
      const data = apiData.map((item: DataType) => Math.abs(item.typeQuantity[0]?.balance) || 0);
  
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = data;
      this.chart.data.datasets[0].label = "Balance";
      this.chart.update();
    });
  }

  createChart() {
    this.chart = new Chart("MyChart", this.config);
  }
}