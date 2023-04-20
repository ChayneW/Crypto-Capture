// source: https://www.coingecko.com/en/api/documentation

/* 
    coinMarket:
        - **vs_currency: usd
        - order: market_cap_desc
        - per_page: 10 (coins)
        - page: 1 (request called)
        - sparkline: false (extra data?)
        - locale: en

    nft: same
*/
const requests = {
    coinList: `https://api.coingecko.com/api/v3/coins/list`,
    coinMarket: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`,
    coinTrending: `https://api.coingecko.com/api/v3/search/trending`,
    nftList: `https://api.coingecko.com/api/v3/nfts/list?per_page=10&page=1`,
}


export default requests