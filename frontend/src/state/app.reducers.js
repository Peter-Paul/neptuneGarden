import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:"NeptuneGarden",
    neptuneAddress:undefined,
    admins:undefined,
    nfts:undefined,
    mainRpc:"eiqldMsZNkDkrst9mrnnj7Qf7XDtfEMQ",
    testRpc:"R7PlSInqyJ2vIYRWZIJG0OaecSSg66EI",
    nftMaxSupply:undefined,
    nftMintPrice:undefined,
    nftSupply:undefined,
    baseUrl:undefined,
    userAddress:undefined,
    connected:undefined,
    nftPaused:undefined,
    nftEthBalance:undefined,
    nftAuctioned:undefined
}

export const appSlice = createSlice({
    name:"application",
    initialState,
    reducers:{
        loadState: (state,action) => {
            state.nfts = action.payload.nfts && action.payload.nfts
            state.admins = action.payload.admins && action.payload.admins
            state.neptuneAddress = action.payload.neptuneAddress && action.payload.neptuneAddress
            state.nftMaxSupply = action.payload.nftMaxSupply && action.payload.nftMaxSupply
            state.nftMintPrice = action.payload.nftMintPrice && action.payload.nftMintPrice
            state.nftSupply = action.payload.nftSupply && action.payload.nftSupply
            state.baseUrl = action.payload.baseUrl && action.payload.baseUrl
            state.nftPaused = action.payload.nftPaused && action.payload.nftPaused
            state.nftEthBalance = action.payload.nftEthBalance && action.payload.nftEthBalance
            state.nftAuctioned = action.payload.nftAuctioned && action.payload.nftAuctioned
        },

        connectUser: (state,action) => {
            state.userAddress = action.payload.userAddress
            state.connected = action.payload.connected
        },

        changePause: (state,action) => {
            state.nftPaused = action.payload.nftPaused
        },

        changeAuction: (state,action) => {
            state.nftAuctioned = action.payload.nftAuctioned
        }
    }
})

export const {
    changeAuction,
    changePause,
    connectUser,
    loadState
} = appSlice.actions

export default appSlice.reducer