

function SearchModel() {
  this.matchingItem = [];
  this.LOCALHOST_URL = "http://127.0.0.1:4000";
}

SearchModel.prototype = {
  constructor: SearchModel,
  async fetchData(inputValue){
    const matchingData = data
    console.log(matchingData)
    await sleep(400);
    this.matchArray(matchingData, inputValue);
  },

  matchArray(matchingData, inputValue) {
    this.matchingItem = [];
    matchingData.searchData.forEach((matchingWord) => {
      if(matchingWord.indexOf(inputValue)=== 0) {
        this.matchingItem.push(matchingWord);
      }    
    })
  },
}