import axios from "axios"

export default class NftService{
    default = [
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreiepopglebcyyq6fgfi3qfvkxb27kkcnweekb6lcgogdy3sfux3ud4",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreianufxivkxx2gehui32nmgywf4j6srndtoptlaoadkwp233fxgkeq",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreihy3ryzk3zwphkkclurmbfgpk5zi67gpwcev3adz5k24pvgr55vhi",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreiga4b4kcvez4vyjs6kxilrmtjcwtbndiq5oms7spjzxhp574kpeoe",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreict2dw7t7buhxpsruhpqv4y6shbedtmpkmra3xjec5edk4gbmnoni",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreihxbki7tsxh7njtvcbkoh4qhxleghqemqpubtez5g5xdt534z5p74",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreiaxfhy4wepnr6ghsxsiiy4uteklmobe5zdrtexe7sf4p63am34dku",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreibf2tmucwobgryr6uyj7ro45sxeown6eujvpkpy2ibzo7z5yhett4",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreideatftmpsq67ltjlkr2uumpcl34xdzr754utdttjqcsybsbkvf3q",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreigqeqjsmvvcwfumvilg5b4gtdj6bo4yddzreug5daere66vvjceue",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreid2xsvrwphoicvqtsgplplhx3vm6c53uet7vqlnftor5mqf2ustra",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreiazwu44rtzvy4r22l7gu7mpctbqt2nt6ts2pez3nxkuvq6isdlycm",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreig7u4uix3wmvpxqcng5hdoueyocmc74fj5pvygfuegqr7hnyasg7y",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreihjtzxrzvy3dfhp6n7sdy2xmk7lbk7vkf3nymknqwsgvb4w5wvkka",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreihlzuyg37pzxu74fc4bzumsuz2tnturpbtrqf6p77plpdyygo5yza",
          New:true
        },
        {
          Background:"Background",
          Skin:"Skin",
          Head:"Head",
          Eyes:"Eyes",
          Clothes:"Clothes",
          Accessories:"Accesso",
          Image:"https://ipfs.io/ipfs/bafkreih2evdj7z2sdi4ulqvgbw6tsc34czgqf6sgeta43n665sft7e4ujy",
          New:true
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