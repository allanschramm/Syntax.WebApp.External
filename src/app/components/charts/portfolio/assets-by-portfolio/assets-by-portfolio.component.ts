import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface DataType {
  portfolioName: string;
  amount: number;
}

@Component({
  selector: 'app-assets-by-portfolio',
  templateUrl: './assets-by-portfolio.component.html',
  styleUrls: ['./assets-by-portfolio.component.css']
})
export class AssetsByPortfolioComponent implements OnInit {
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
          label: 'Amount',
          data: [],
          backgroundColor: [
            'rgba(75, 192, 192)',
            'rgba(54, 162, 235)',
            'rgba(153, 102, 255)',
            'rgba(255, 99, 132)',
            'rgba(255, 159, 64)',
            'rgba(255, 205, 86)',
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
            display: true,
            text: 'Assets By Portfolio'
          }
        }
      },
    };

    this.createChart();

    this.syntaxService.getAssetByPortfolioByUser(this.authService.getUserId())
      .subscribe(apiData => {
        const labels = apiData.map((item: DataType) => item.portfolioName);
        const data = apiData.map((item: DataType) => item.amount);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].label = "Value";
        this.chart.update();
      });
  }

  createChart() {
    this.chart = new Chart("AssetByPortfolio", this.config);
  }
}
