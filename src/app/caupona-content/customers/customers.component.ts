import { Component } from "@angular/core";

interface Customer {
  name: string;
  activity: any;
}

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent {
  customer: Customer = {
    name: "James Bond",
    activity: new Date(new Date().setDate(new Date().getDate() - 5)) // example
  };

  customers: Array<any> = [
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setDate(new Date().getDate() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    },
    {
      name: "James Bond",
      activity: new Date(new Date().setMonth(new Date().getMonth() - 5)), // example
      checked: false
    }
  ];

  visits = [
    {
      date: new Date().toDateString(),
      amount: "50",
      wasTip: true
    },
    {
      date: new Date().toDateString(),
      amount: "50",
      wasTip: false
    },
    {
      date: new Date().toDateString(),
      amount: "50",
      wasTip: true,
      tipValue: "30"
    },
    {
      date: new Date().toDateString(),
      amount: "50",
      wasTip: false
    },
    {
      date: new Date().toDateString(),
      amount: "50",
      wasTip: true
    },
    {
      date: new Date().toDateString(),
      amount: "50",
      wasTip: true
    }
  ];

  constructor() {
    this.customer = this.setCustomerActivity(this.customer);
    this.customers = this.customers.map(customer =>
      this.setCustomerActivity(customer)
    );
  }

  setCustomerActivity(customer) {
    return {
      ...customer,
      activity:
        new Date().getTime() - customer.activity.getTime() < 2505600000
          ? `last visit ${new Date().getDate() -
              customer.activity.getDate()} days ago`
          : `last visit ${new Date().getMonth() -
              customer.activity.getMonth()} months ago`
    };
  }
}
