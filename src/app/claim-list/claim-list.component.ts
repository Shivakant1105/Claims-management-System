import { Component, OnInit } from '@angular/core';
import { ClaimlistService } from '../claimlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimList } from '../models/claimlist';
interface Claim {
  claimId: number;
  claimStatus: string;
  viewDetail: string;
}

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css'],
})


export class ClaimListComponent implements OnInit {
  claim:any;
  private _route: any;
  // claim!: ClaimList[];


  constructor(
    private claimService: ClaimlistService, public activeRoute:ActivatedRoute, public router:Router
  ){}

  // viewClaimDetail(claim: ClaimList) {
  //   // console.log(`Viewing claim details for claim ID ${c=laim.claimId}`);
  //   // Add your code to show the details of the claim here
  // }

  ngOnInit(
  ): void {
    this.claimList()
  }

claimList(){
this.claimService.claimList().subscribe((res)=>{
  console.log('res =======> ',res)
  this.claim = res;
  console.log('claim======',this.claim)
}, 
 (err)=>{
  console.log('err =======> ',err)
 } )
}

  onLogout() {
    localStorage.clear();
  }
}
