import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface ChartData {
  labels: string[],
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string,
  data: number[],
  backgroundColor: string[],
  borderColor: string[],
  borderWidth: number
}

interface DataType {
  month: string,
  expenses: number,
  revenue: number
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
    const chartData: ChartData = {
      labels: [],
      datasets: [{
        label: 'Expenses',
        data: [],
        backgroundColor: [
          'rgba(233, 102, 102)',
        ],
        borderColor: [
          'rgb(255, 30, 30)',
        ],
        borderWidth: 1
      },
      {
        label: 'Revenue',
        data: [],
        backgroundColor: [
          'rgba(74, 158, 231)',
        ],
        borderColor: [
          'rgb(30, 100, 255)',
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
            display: false,
            text: 'Last Three Months'
          }
        }
      },
    };

    this.createChart();

    this.syntaxService.getUserBalanceLastThreeMonths(this.authService.getUserId())
      .subscribe((apiData: DataType[]) => {
        const labels = apiData.map((item: DataType) => item.month);
        const expenses = apiData.map((item: DataType) => item.expenses);
        const revenue = apiData.map((item: DataType) => item.revenue);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = expenses;
        this.chart.data.datasets[1].data = revenue;

        this.chart.update();
      });
  }
  
  createChart() {
    this.chart = new Chart("ExpenseByClass", this.config);
  }
}