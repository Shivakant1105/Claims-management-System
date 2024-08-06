import { Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider';
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-addprovider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css'],
})
export class AddproviderComponent implements OnInit {
  location: any;
  policy_id: any;
  provider_address: any;
  provider_name: any;
  provider_id: any;
  constructor(private providerService:ProviderService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  providers= [
    {
      provider_id: 1,
      location: 'New York',
      policy_id: 123,
      provider_address: '123 Main St',
      provider_name: 'Acme Insurance',
    },
    {
      provider_id: 2,
      location: 'Los Angeles',
      policy_id: 456,
      provider_address: '456 Elm St',
      provider_name: 'XYZ Insurance',
    },
    {
      provider_id: 3,
      location: 'Chicago',
      policy_id: 789,
      provider_address: '789 Oak St',
      provider_name: 'ABC Insurance',
    },
  ];

  // provider_id!: number;
  // location!: string;
  // policy_id: number;
  // provider_address: string;
  // provider_name: string;

  addProvider() {
    const newProvider = {
      provider_id: this.provider_id,
      location: this.location,
      policy_id: this.policy_id,
      provider_address: this.provider_address,
      provider_name: this.provider_name,
    };

    this.providers.push(newProvider);

    this.clearInputs();
  }

  deleteProvider(provider: any) {
    const index = this.providers.indexOf(provider);

    if (index !== -1) {
      this.providers.splice(index, 1);
    }
  }

  clearInputs() {
    this.provider_id = null;
    this.location = '';
    this.policy_id = null;
    this.provider_address = '';
    this.provider_name = '';
  }
  // provider(){
  //     this.providerService.provider().subscribe((res: any)=>{
  //       console.log('res =======> ',res)
  //       this.provider = res;
  //       console.log('claim======',this.provider)
  //     }, 
  //      (err: any)=>{
  //       console.log('err =======> ',err)
  //      } )
  //     }
  
  onLogout() {
    localStorage.clear();
  }
}
