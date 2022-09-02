<div align="center">
      <img src="https://th.bing.com/th/id/R.cf3f7639754e0dc19bbc1a5f1666e347?rik=Ath%2b%2bmDhk6YVaw&pid=ImgRaw&r=0" alt="Logo" style="width:80%;">
</div>

# Crypto-Lottery Web App:
A Next.Js Web app for crypto-lottery, where users can buy tickets using MATIC cryptocurrency for the lottery, and an admin draws the winner using Solidity Smart contract backend, and thirdweb servers for connecting functionality.
All of the WEB3 transactions are currently registred on MATIC Mumbai (a test-net for the MATIC cryptocurrency) to prevent real currency transactions, other than that transaction real and appear between wallets.
As a lottery admin, you get commision for evey ticket purchased! and you control the flow of the lottery draw.

## Project Technological Stack:
* NextJS & Vercel for quick start and deployment.
* ReactJS for the UI.
* Typescript & Javascript for typing.
* TailwindCSS for styling.
* Solidity for smart contracts.
* Thirdweb for deploying the smart contract.

## Usage:
* To join the lottery:\
      1. Visit [Crypto-Lottery](https://crypto-lottery-phi.vercel.app/)\
      2. Create/Use a Metamask account.\
      3. Welcome to Crypto-Lottery! here you can buy tickets win a draw is available.\

* To edit:\
      1. Clone this repo.\
      2. Run `npm install` to install all dependecies.\
      3. Run `npm start` to start on local server.\
      4. Create a Metamask account using the web extension.\
      5. Sign in via the `Login with Metamask` button.\
      
* To create your own lottery:\
      1. Clone this repo\
      2. Run `npm install` to install all dependecies.\
      3. Run `npm start` to start on local server.\
      4. Run `cd contract`\
      5. Run `npm install`  to install contract dependicies.\
      6. Run `npx thirdweb deploy` to deploy the contract to thirdweb.\
      7. Follow instructions to use your Metamask account as admin.\
            7.1- IF testing, make sure to use Mumbai Server as a test net!!!\
            7.2- Use [Faucet charging websites](https://faucet.polygon.technology/) or similar to charge your Mumbai wallet with *Dummy* Matic currency.\
      8. Once deployed, copy the Contract ID from thirdweb.\
      9. Run `cd ..`, Create `.env.local` file in your folder.\
      10. In the `.env.local` file add the following: `NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS=YOUR_CONTRACT_ID`\
      11. Refresh the page.\
      12. Sign in using the Metamask account you used in thirdweb.\
      13. Congratulations! you can DrawWinner/RefundAll/RestartDraw/WithdrawCommision.
 
### Mumbai Test Net data:
-Network Name: Mumbai Testnet\
-New RPC URL: https://rpc-mumbai.maticvigil.com\
-Chain ID: 80001\
-Currency Symbol: MATIC\
-Block Explorer URL: https://polygonscan.com/

 
 ## Demo & Showcasing:
 - Video: [User interactions](https://youtu.be/Ta5o-LQpSrU)
![Screenshot 2022-09-01 at 12 18 59](https://user-images.githubusercontent.com/30297892/187879320-70146cbc-fdac-40e8-93ce-97c3c1e3e869.png)







 - Video: [Admin controls](https://youtu.be/LlyFIfLKMQg)
![Screenshot 2022-09-01 at 12 18 29](https://user-images.githubusercontent.com/30297892/187879335-029009af-aa45-41f7-b54e-ca7a7e254947.png)



### Special Thanks:
- [Sonny Sangha](https://www.youtube.com/c/SonnySangha) for his amazing tutorial.

