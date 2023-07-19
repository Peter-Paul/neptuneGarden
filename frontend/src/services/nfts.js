import axios from "axios"

export default class NftService{
    default = [
        {
          cid:"bafybeid5jyrgwotnef2igvguencmnu7hxt64kov5o6f3bq4wovh665mbmi",
          name:"neptune1",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeic47sjbl5pkrb5xzyg5w4nvvwf5vuyb4mmbzes2mhpscucdc7lzy4",
          name:"neptune2",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeigrxqsoq4evusqnq4o52hgsohv6isou6hixzt37sjahjun2l3h3lu",
          name:"neptune3",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeic4cug5fjqdd7645dqqs7pzycg53xsna2uenphjkqzwrqmhjdbl4y",
          name:"neptune4",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeihxfknvcs5lfrogt3zpetdshajadxero7icqzhejn5a4brhtrj45a",
          name:"neptune5",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeigklvztt6omwq3ltwqbsuzehcqxkazivjl5eh6sas7zoz7n6rrrlm",
          name:"neptune6",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeic4xuxcgxvvxylvsqg5kmluhdh5mwi552lwew3s2ea472zmwzfn3a",
          name:"neptune7",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeiccbid2wjdmqdmff62eyr5tbulthqosaufz7hxr3dsdw6ugjkw4ly",
          name:"neptune8",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeicg2lmy4t6booo5efoyquoqpvwx4zruenu5hmofthqz5fv5g6kwh4",
          name:"neptune9",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeid3vqgkegz3dhwwtkcyfqy4xhvaapseibajz546pdshylssdvkjqu",
          name:"neptune10",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeigycim5yrpfgmsbyyg4ozcxg4tuyijdqrj2zayz4iltdmlbck245y",
          name:"neptune11",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeicnkapv24pvkhihmfllefn3bfawu7wx2eqkfm6qc7pkhxxkujaega",
          name:"neptune12",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        },
        {
          cid:"bafybeidfu3hunakb7bw5x6crqlrzlyoz532ahuwn6tposjl2hsw64d4wju",
          name:"neptune13",
          address:"0xc0c53d02295c95ce03f3ac59e8186827065cef09",
          owner:"0xc58f0e2007b4c52597042cb212a3683af2abda06",
          price:"0.05",
          ipfs:{
              "image": "ipfs://QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/1.png",
              "attributes": [
                {
                  "trait_type": "Background",
                  "value": "Human"
                },
                {
                  "trait_type": "Skin",
                  "value": "Pink Hairband"
                },
                {
                  "trait_type": "Head",
                  "value": "White Qipao with Fur"
                },
                {
                  "trait_type": "Eyes",
                  "value": "Daydreaming"
                },
                {
                  "trait_type": "Clothes",
                  "value": "Lipstick"
                },
                {
                  "trait_type": "Accessories",
                  "value": "Gloves"
                }
              ]
          },
          minted:true,
          assets:[
            "0x53676502Dba17E836E14ec863bAAEA3EB6C6b9E0", "0x98E81897521827f6559357f64be65855d1C92409"
          ],
          nfts:[
            {}
          ]
        }
      ]
    
    route = "nfts"

    constructor(baseUrl){
        this.url = baseUrl ? `${baseUrl}${this.route}` : undefined
    }

    async getNfts(){
        try{
            if(this.url){
                const nfts = await axios.get(this.url)
                if (nfts.status === 200) return nfts.data
                else return undefined
            }else{
                return this.default
            }

        }catch(err){
            console.log(`Error getting coins: ${err}`)
            return undefined
        }
    }
}