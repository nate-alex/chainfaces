module.exports = async function (context, req) {
  const { id } = req.query;
  const digits = Array.from(Array(10), (x, i) => (id.match(new RegExp(i, 'g')) || []).length);
  const sum = digits.reduce((sum, x, i) => sum + x * i, 0);
  const number = BigInt(id);
  const colorMax = BigInt(0xffffff);
  var Web3 = require('web3')
  var provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/5553f2b4e8004ef8996e5479289bb81d");
  var web3 = new Web3(provider);

 // var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  let address = '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a';
  
  let abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"createFace","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getBackgroundColor","outputs":[{"internalType":"uint256","name":"backgroundColor","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFace","outputs":[{"internalType":"string","name":"face","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFaceSymmetry","outputs":[{"internalType":"uint256","name":"faceSymmetry","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getGolfScore","outputs":[{"internalType":"uint256","name":"golfScore","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPercentBear","outputs":[{"internalType":"uint256","name":"percentBear","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getTextColor","outputs":[{"internalType":"uint256","name":"textColor","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

  let contract = new web3.eth.Contract(abi, address)
  
  async function getAllMaData () {
    let [ data1, data2, data3, data4, data5, data6, data7 ] = await Promise.all([
      contract.methods.getTextColor(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'}),
      contract.methods.getBackgroundColor(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'}),
      contract.methods.getFaceSymmetry(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'}),
      contract.methods.getGolfScore(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'}),
      contract.methods.getPercentBear(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'}),
      contract.methods.getFace(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'}),
      contract.methods.ownerOf(id).call({from: '0x91047abf3cab8da5a9515c8750ab33b4f1560a7a'})
    ])
    return {data1, data2, data3, data4, data5, data6, data7}
  }
  
  let maData = await getAllMaData()

  console.log(maData.data1)
  console.log(maData.data2)
  console.log(maData.data3)
  console.log(maData.data4)
  console.log(maData.data5)
  console.log(maData.data6)
  console.log(maData.data7)

  const color = n => n.toString(16).padStart(6, 0);

  var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  let faceColor = rgbToHex(maData.data1 - 5);
  let toneColor = maData.data2;
  let ownerOf = maData.data7;



  if (toneColor > 14202015) {
    toneColor = 16777215
  }

  if (ownerOf == '0x7039D65E346FDEEBbc72514D718C88699c74ba4b')
  {
    toneColor = 10092492
  }

  toneColor = rgbToHex(toneColor) 

  let faceSymmetry = Number(maData.data3);
  let golfScore = Number(maData.data4);
  let percentBear = Number(maData.data5);
  let face = maData.data6;
  
 // toneColor = 14465188;
 // faceSymmetry = 100
 // golfScore = 14
 // percentBear = 0
 // face = '( ͡° ͜ʖ ͡°)'

  
  context.res = {
    body: {
      image_data: `<svg xmlns="http://www.w3.org/2000/svg" width="350" height="350"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="75px" fill="#${color(faceColor)}">${face}</text></svg>`,      description: 'We are ChainFaces. We are ready to watch over you forever ( ͡° ͜ʖ ͡°) ',
      name: 'ChainFace #'+id, 
      attributes: [
        {
          display_type: "boost_percentage", 
          trait_type: 'Face Symmetry',
          value: faceSymmetry
        },
        {
          display_type: "boost_number", 
          trait_type: 'Golf Score',
          value: golfScore
        },
        {
          display_type: "boost_percentage", 
          trait_type: 'Percent Bear',
          value: percentBear
        },
        {
          trait_type: 'Face Symmetry',
          value: faceSymmetry
        },
        {
          trait_type: 'Golf Score',
          value: golfScore
        },
        {
          trait_type: 'Percent Bear',
          value: percentBear
        },
      ],
      background_color: color(toneColor)
    }
  };
};
