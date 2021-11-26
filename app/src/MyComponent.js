import React, { useEffect } from "react";
import { useState } from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props

  const [allNfts, setAllNfts] = useState([]);
  const [toInput, setToInput] = useState("");
  const [tokenInput, setTokenInput] = useState(0);

  const currentAccount = drizzleState.accounts[0];
  const allToken = [];

  for (let index = 0; index < 100; index++) {
    allToken.push(index);

  }

  useEffect(() => {
    drizzle.contracts.Waifus.methods.balanceOfOne(currentAccount)
      .call()
      .then(s => {
        setAllNfts(s);
      });
  }, []);


  const send = () => {

    if(tokenInput < 0 || tokenInput > 100) {
      toast.info("Nhap gia tri hop le");
      return;
    }

    const BN = drizzle.web3.utils.BN;

    var callData = drizzle.web3.utils.asciiToHex("TEST");

    drizzle.contracts.Waifus
      .methods
      .safeTransferFrom(currentAccount, toInput, new BN(tokenInput), new BN(1), callData)
      .send()
      .on('transactionHash', function (hash) {
        console.log(hash);
      })
      .on('receipt', function (receipt) {
        console.log(receipt);
      })
      .on('confirmation', function (confirmationNumber, receipt) {
      })
      .on('error', function(err) {
        toast.error("Loi");
      });
  }

  return (
    <div className="App">
      <ToastContainer />
      {/* <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Drizzle Examples</h1>
        <p>
          Examples of how to get started with Drizzle in various situations.
        </p>
      </div> */}

      <div className="section">
        <h2>Thông tin ví</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>Waifu NFTS</h2>

        <p>Danh sách NFT</p>

        <div className="nftGrid">
          <NFTList allNFTs={allNfts} ></NFTList>
        </div>

        <div>
          <p>Chuyển NFT</p>

          <span> Địa chỉ ví </span>
          <input type="text" value={toInput} onInput={e=> setToInput(e.target.value)} name="to" />
          <span> Mã của đồng token </span>
          <input type="number" value={tokenInput} onInput={e=> setTokenInput(e.target.value)} name="token" />

          <button onClick={() => send()}>Send</button>
          {/* <ContractForm
            drizzle={drizzle}
            contract="Waifus"
            method="safeTransferFrom"
            labels={["From", "To", "Id Token", "Ammount"]}
          /> */}



        </div>


      </div>
      <div>
      </div>

    </div>
  );
};

const NFTList = ({ allNFTs }) => {

  if (allNFTs?.length > 0) {
    return allNFTs.map((s, index) => {
      var id = index + 6000;
      if (s === '1') {
        return <div id={"nft" + s} className="nft">
          <div>ID: {index}</div>
          <img src={`https://www.thiswaifudoesnotexist.net/example-${id}.jpg`} />
        </div>
      }
      return <></>;
    })
  }
  return <></>;


}
