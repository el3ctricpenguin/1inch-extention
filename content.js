console.log("Tadaa!")
setInterval(updateTitle, 5000); //5秒ごとに更新
function updateTitle(){
  //見つけたものとUSDT(C)でトークンを買うときのもので比べて、買いか売りかを判定している
  if(document.evaluate('//extended-rate-info/div/div/span[contains(text(), "USD")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent == document.evaluate('//extended-rate-info/div[2]/div/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent){
    //DOM構造？と'USD'の文字が入っている、という条件で値段を見つけている
    var text = 'B ' + document.evaluate('//extended-rate-info/div/div/span[contains(text(), "USD")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent.replace(/[^0-9^\.]/g, '');
    //正規表現(らしい)で数値だけ抜き出している
  }else{
    var text = 'S ' + document.evaluate('//extended-rate-info/div/div/span[contains(text(), "USD")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent.replace(/[^0-9^\.]/g, '');
  }
  document.getElementsByTagName('title')[0].innerHTML = text;
  //console.log("price updated")
  //extended-rate-info/div[2]/div/span <- Buy USDT(C)を他のトークンに変えるときの値段のXPATH
  //extended-rate-info/div[1]/div[2]/span <- Sell 同上
}
