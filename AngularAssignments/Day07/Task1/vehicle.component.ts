import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicleForm:FormGroup = new FormGroup({
    ownerName : new FormControl("", Validators.required),
    contactNumber : new FormControl("", [Validators.required,Validators.pattern("\\d{10}")]),
    ownerEmail : new FormControl("", Validators.email),
    registrationNumber : new FormControl("",[Validators.required, Validators.pattern("[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}")]),
    address : new FormControl("", Validators.required),
    model : new FormControl("",[Validators.required, Validators.pattern("[a-z]{1,10}")]),
    color : new FormControl("", Validators.required),
    year : new FormControl("", Validators.pattern("\\b(201[2-9]|2020|202[1-2])\\b")),
  });
  constructor() { }
  ngOnInit(): void {
  }
  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      let customerObj = this.vehicleForm.value;
      console.log(customerObj);
  }
}
