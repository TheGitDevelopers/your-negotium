import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements AfterViewInit {
  products = [
    { name: "product One", value: 50 },
    { name: "product two", value: 50 },
    { name: "product three", value: 100 },
    { name: "product three", value: 200 }
  ];

  barGraph = [
    [10, 30, 50, 10, 80, 120, 20, 150, 250, 30, 30, 150],
    [40, 100, 120, 150, 200, 250, 301, 110, 60, 50, 10, 50]
  ];

  barGraphName = ["Consumption", "Product sale"];

  transformedProducts = [];

  previousPieSliceRotate = 0;

  productsSum = 0;

  maxValue = 0;

  barGraphLabel = [];

  barGraphTransformed;

  maxBar = 0;

  transformedBar = [];

  @ViewChild("saleGraph", { read: ElementRef }) saleGraph: ElementRef;

  constructor() {

    this.products.forEach(({ value }) => (this.productsSum += value));
    this.transformedProducts = this.products.map((product, index) => {
      this.maxValue =
        product.value > this.maxValue
          ? Math.round(product.value * 10) / 10
          : this.maxValue;
      const divide = product.value / this.productsSum;
      const color = index ? divide * 75 * 2 : 0;
      const pieRotate = divide * 360;
      const pieSliceRotate = this.previousPieSliceRotate;
      this.previousPieSliceRotate += pieRotate;
      return {
        ...product,
        pieRotate,
        pieSliceRotate,
        color
      };
    });
    this.barGraph.forEach(period =>
      period.forEach(bar => {
        if (this.maxBar < bar) this.maxBar = bar;
      })
    );
    const checkRound = this.maxBar.toString().length;
    const rounds = Math.pow(10, checkRound - 2);
    this.barGraphLabel.push(0);
    for (let i = 1; i <= 10; i++) {
      this.barGraphLabel.push(
        ((Math.ceil(this.maxBar / rounds) * rounds) / 10) * i
      );
    }

    this.barGraph.map((period, periodIndex) =>
      period.map((value, valueIndex) => {
        if (!this.transformedBar[valueIndex]) this.transformedBar.push([]);
        if (!this.transformedBar[valueIndex][periodIndex])
          this.transformedBar[valueIndex].push([]);
        this.transformedBar[valueIndex][periodIndex].push(value);
      })
    );
  }

  ngAfterViewInit(): void {
    const labels = ["Current year", "Last year"];
    const colors = [
      "rgba(0, 55, 255, 0.3)",
      "rgba(55, 89, 210, 0.3)",
      "rgba(68, 117, 177, 0.3)",
      "rgba(52, 131, 228, 0.3)",
      "rgba(0, 115, 255, 0.3)"
    ];
    const borderColors = [
      "rgba(0, 55, 255, 1)",
      "rgba(55, 89, 210, 1)",
      "rgba(68, 117, 177, 1)",
      "rgba(52, 131, 228, 1)",
      "rgba(0, 115, 255, 1)"
    ];
    const dataset = this.barGraph.map((value, index) => {
      return {
        label: labels[index],
        data: value,
        backgroundColor: colors[index],
        borderColor: borderColors[index],
        pointStyle: "line"
      };
    });
    const chart = new Chart(this.saleGraph.nativeElement, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
          "XI",
          "XII"
        ],
        datasets: dataset
      }
    });
  }

  createHeight(height) {
    return `${(height / this.maxBar) * 100}%`;
  }
}
