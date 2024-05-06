export type PortfolioGet ={
    id: number,
    symbol: string,
    companyName: string,
    purchase:number,
    lasDiv:number,
    industry:string,
    marketCap:number
    comments:any
}

export type PortfolioPost = {
    symbol:string
}