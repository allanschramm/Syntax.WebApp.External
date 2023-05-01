import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface DataType {
  assetClassName: string;
  amount: number;
}

@Component({
  selector: 'app-assets-by-class',
  templateUrl: './assets-by-class.component.html',
  styleUrls: ['./assets-by-class.component.css']
})
export class AssetsByClassComponent implements OnInit {
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
            display: true,
            text: 'Assets By Class'
          }
        }
      },
    };

    this.createChart();

    this.syntaxService.getAssetByClassByUser(this.authService.getUserId())
      .subscribe(apiData => {
        const labels = apiData.map((item: DataType) => item.assetClassName);
        const data = apiData.map((item: DataType) => item.amount);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].label = "Value";
        this.chart.update();
      });  }

  createChart() {
    this.chart = new Chart("AssetByClass", this.config);
  }
}
