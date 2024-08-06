export class claimIdDetail{
    claimId!:number;
    claimStatus!: string;
    description!: string;
    claimDate! : Date;
    benefitId!:number;
    claimType!: string;
    providerId!:number;
    memberId!:number;
    policyId!:number;
    amountClaimed!: DoubleRange;
    amountSettled!: DoubleRange
}
