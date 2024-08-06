import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ClaimIdDetailService } from '../claim-id-detail.service';



@Component({
  selector: 'app-claim-id-detail',
  templateUrl: './claim-id-detail.component.html',
  styleUrls: ['./claim-id-detail.component.css']
})
export class ClaimIdDetailComponent implements OnInit {
  claim:any;
  claimId:string= '';
  constructor(private claimService: ClaimIdDetailService, public route:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
 

  this.route.queryParams.subscribe((queryParams: Params) => {
    console.log(' queryParams => ', queryParams);
    this.claimId = queryParams['id']; 
    console.log('claimId=======>',this.claimId);
    
  });

  this.claimIdDetail()
  }
  

  claimIdDetail(){
    this.claimService.claimIdDetail(this.claimId).subscribe((res)=>{
      console.log('res =======> ',res)
      this.claim = res
      
    }, 
     (err: string)=>{
      console.log('err =======> ',err)
     });
    }
    // QueryParam(){
    //   this._route.navigate(['/claimiddeatils', claim],{queryParams:{edit:'true'}})
    // }
   
    onLogout(){
      localStorage.clear();
    }
  

  }

  


  


