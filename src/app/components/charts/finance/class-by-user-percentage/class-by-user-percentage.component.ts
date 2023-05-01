import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface DataType {
  transactionClass: string;
  classBalance: number;
  classPercentage: number;
}

@Component({
  selector: 'app-class-by-user-percentage',
  templateUrl: './class-by-user-percentage.component.html',
  styleUrls: ['./class-by-user-percentage.component.css']
})
export class ClassByUserPercentageComponent implements OnInit {
  public chart: any;
  config: any;

  constructor(private syntaxService: SyntaxService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.chart) {
      this.chart.clear();
      this.chart.destroy();
    }

    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'Percentage',
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
        }
      ]
    };

    this.config = {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Expenses By Class'
          }
        }
      },
    };

    this.createChart();

    this.syntaxService.getExpensePercentageByClassByUser(this.authService.getUserId())
      .subscribe(apiData => {
        const labels = apiData.map((item: DataType) => item.transactionClass);
        const data = apiData.map((item: DataType) => item.classPercentage);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].label = "Percentage";
        this.chart.update();
      });
  }

  createChart() {
    this.chart = new Chart("ExpenseByClassPercentage", this.config);
  }
}
