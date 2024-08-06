import { Component, OnInit } from '@angular/core';
import { Policy } from '../models/policy';
import { PolicydataService } from '../policydata.service';
@Component({
  selector: 'app-policy-data',
  templateUrl: './policy-data.component.html',
  styleUrls: ['./policy-data.component.css'],
})
export class PolicyDataComponent implements OnInit {
  policies: Policy[] = [
    {
      id: 1,
      name: 'Policy 1',
      description: 'This is the first policy',
      benefitId: 2,
      coverageDetails: '',
      capAmountBenefits: 5,
      policyNumber: 3,
      premiumAmount: 3,
      tenure: '',
      terms: '',
    },
    { id: 2, name: 'Policy 2', description: 'This is the second policy',benefitId: 2,
    coverageDetails: 'all details',
    capAmountBenefits: 5000,
    policyNumber: 3765,
    premiumAmount: 3000,
    tenure: '5 year',
    terms: 'all condition', },
    { id: 3, name: 'Policy 3', description: 'This is the first policy' ,benefitId: 2,
    coverageDetails: '',
    capAmountBenefits: 5,
    policyNumber: 3,
    premiumAmount: 3,
    tenure: '',
    terms: '',},
  ];
  //
  selectedPolicy: Policy = new Policy();

  constructor(private policyService: PolicydataService) {}

  ngOnInit(): void {
    // this.policyData()
  }

  addPolicy() {
    this.selectedPolicy = new Policy();
  }

  editPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  deletePolicy(policy: Policy) {
    const index = this.policies.indexOf(policy);
    this.policies.splice(index, 1);
  }

  savePolicy() {
    if (this.selectedPolicy.id === undefined) {
      this.selectedPolicy.id = this.policies.length + 1;
      this.policies.push(this.selectedPolicy);
    } else {
      const index = this.policies.findIndex(
        (p) => p.id === this.selectedPolicy.id
      );
      this.policies[index] = this.selectedPolicy;
    }
    this.selectedPolicy = new Policy();
  }
  // policyData(){
  //   this.policyService.policyData().subscribe((res: any)=>{
  //     console.log('res =======> ',res)
  //     this.policyData = res;
  //     console.log('claim======',this.policyData)
  //   },
  //    (err: any)=>{
  //     console.log('err =======> ',err)
  //    } )
  //   }

  cancel() {
    this.selectedPolicy = new Policy();
  }

  onLogout() {
    localStorage.clear();
  }
}
