import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

interface DataType {
  portfolioName: string;
  amount: number;
}

@Component({
  selector: 'app-portfolio-evolution',
  templateUrl: './portfolio-evolution.component.html',
  styleUrls: ['./portfolio-evolution.component.css']
})
export class PortfolioEvolutionComponent implements OnInit {
  public chart: any;
  config: any;

  constructor(private syntaxService: SyntaxService, private authService: AuthService) { }
  
  ngOnInit(): void {
    const data = {
      labels: [],
      datasets: [
        {
          label: 'Dataset',
          data: [],
          borderColor: '',
          backgroundColor: '',
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15
        }
      ]
    };

    this.config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'New Worth Growth',
          }
        }
      }
    };
    
    this.createChart();

    this.syntaxService.getPortfolioEvolutionsByUser(this.authService.getUserId())
    .subscribe(apiData => {
      const days = apiData.map((item: any) => item.day);
      const values = apiData.map((item: any) => item.purchasePrice);

      this.chart.data.labels = days;
      this.chart.data.datasets[0].data = values;
      this.chart.data.datasets[0].label = "Net Worth";
      this.chart.update();
    });

  }

  createChart() {
    this.chart = new Chart("PortfolioEvolution", this.config);
  }
}
