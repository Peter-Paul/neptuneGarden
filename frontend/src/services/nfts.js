import axios from "axios"

export default class NftService{
  
    default = []
    
    route = "token"

    constructor(baseUrl){
        this.url = baseUrl ? `${baseUrl}${this.route}` : undefined
    }

    async getStakedNfts(address){
        try{
            if(this.url){
                const nfts = await axios.get(`${this.url}/${address}`)
                if (nfts.status === 200) return nfts.data
                else return undefined
            }else{
                return this.default
            }

        }catch(err){
            console.log(`Error getting NFTs: ${err}`)
            return undefined
        }
    }

    async postStakedNft(data){
      try{
          if(this.url){
              const nfts = await axios.post(this.url,{...data,created:Math.floor( new Date().getTime() / 1000  )})
              if (nfts.status === 200) return nfts.data
              else return undefined
          }else{
              return this.default
          }

      }catch(err){
          console.log(`Error adding NFT: ${err}`)
          return undefined
      }
  }

  async deleteStakedNft(id){
    try{
        if(this.url){
            const nfts = await axios.delete(`${this.url}/${id}`)
            if (nfts.status === 200) return true
            else return undefined
        }else{
            return this.default
        }

    }catch(err){
        console.log(`Error deleting NFT: ${err}`)
        return undefined
    }
}
}