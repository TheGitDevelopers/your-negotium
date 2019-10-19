import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"]
})
export class GraphComponent implements OnInit {
  barGraph = [
    [{ value: 10 }, { value: 30 }],
    [{ value: 50 }, { value: 10 }],
    [{ value: 80 }, { value: 120 }],
    [{ value: 20 }, { value: 150 }],
    [{ value: 250 }, { value: 30 }],
    [{ value: 30 }, { value: 150 }],
    [{ value: 40 }, { value: 100 }],
    [{ value: 120 }, { value: 150 }],
    [{ value: 200 }, { value: 250 }],
    [{ value: 301 }, { value: 110 }],
    [{ value: 60 }, { value: 50 }],
    [{ value: 10 }, { value: 50 }]
  ];
  maxBar = 0;
  svgGraph = [];

  svgGraphFirst = "";
  svgGraphSecond = "";

  circles = [];

  constructor() {
    this.barGraph.forEach(period =>
      period.forEach(bar => {
        if (this.maxBar < bar.value) this.maxBar = bar.value;
      })
    );
    this.barGraph.forEach((period, periodIndex) =>
      period.forEach(({ value }, index) => {
        if (index === 0)
          this.svgGraphFirst += ` T ${periodIndex++ * 75}, ${400 -
            (value / this.maxBar) * 250}`;
        if (index === 1)
          this.svgGraphSecond += ` T ${periodIndex++ * 75}, ${400 -
            (value / this.maxBar) * 250}`;
      })
    );
    let firstM;
    const firstValue = [];
    const secondValue = [];
    this.barGraph.forEach((period, periodIndex) => {
      period.forEach(({ value }, index) => {
        if (!firstValue[index]) {
          firstValue.push([]);
          this.svgGraph.push("");
        }
        let coordinates = { x: 0, y: 0 };
        if (periodIndex) {
          coordinates = {
            x: (periodIndex + 1) * 83,
            y: 615 - (value / this.maxBar) * 670
          };
          firstValue[index].push(coordinates);
        } else {
          coordinates = { x: 0, y: 615 - (value / this.maxBar) * 670 };
          firstM = coordinates;
          this.svgGraph[index] += `M ${coordinates.x}, ${coordinates.y}`;
        }
      });
    });

    firstValue.forEach((collection, collIndex) => {
      if (!secondValue[collIndex]) secondValue.push([]);
      collection.forEach((coordinates, index) => {
        if (collection.length - 2 >= index) {
          const secondCoordinates = {
            x: (coordinates.x + firstValue[collIndex][index + 1].x) / 2,
            y: (coordinates.y + firstValue[collIndex][index + 1].y) / 2
          };
          secondValue[collIndex].push(secondCoordinates);
        }
      });
    });

    firstValue.forEach((coordinates, index) => {
      let secondCoordinates = { x: 0, y: 0 };
      if (index) {
        if (firstValue.length - 2 >= index) {
          secondCoordinates = {
            x:
              (secondValue[index - 1].x +
                coordinates.x * 2 +
                secondValue[index].x) /
              4,
            y:
              (secondValue[index - 1].y +
                coordinates.y * 2 +
                secondValue[index].y) /
              4
          };
        }
        if (firstValue.length - 1 === index) {
          secondCoordinates = {
            x: coordinates.x,
            y: coordinates.y
          };
        }
      }
      if (!index) {
        secondCoordinates = {
          x: (firstM.x + coordinates.x * 2 + secondValue[index].x) / 4,
          y: (firstM.y + coordinates.y * 2 + secondValue[index].y) / 4
        };
      }
      this.circles.push(secondCoordinates);
    });

    firstValue.forEach((collection, collIndex) => {
      collection.forEach((coordinates, index) => {
        if (collection.length - 2 >= index)
          this.svgGraph[collIndex] += ` Q ${coordinates.x},${coordinates.y} ${
            secondValue[collIndex][index].x
          },${secondValue[collIndex][index].y}`;
      });
      this.svgGraph[collIndex] += ` T ${collection[collection.length - 1].x},${
        collection[collection.length - 1].y
      }`;
    });
  }

  ngOnInit() {}
}
