class MetaPowerCrypto {
    constructor(projectName, tokenSymbol, initialSupply, founder) {
      this.projectName = projectName;
      this.tokenSymbol = tokenSymbol;
      this.totalSupply = initialSupply;
      this.founder = founder;
      this.currentPrice = 0;
      this.holders = [];
    }
  
    updatePrice(newPrice) {
      this.currentPrice = newPrice;
    }
  
    mintTokens(amount) {
      this.totalSupply += amount;
    }
  
    transferTokens(sender, recipient, amount) {
      if (this.holders.includes(sender) && this.totalSupply >= amount) {
        this.totalSupply -= amount;
        this.holders.push(recipient);
        console.log(`${amount} ${this.tokenSymbol} tokens transferred from ${sender} to ${recipient}`);
      } else {
        console.log('Token transfer failed. Check sender balance or recipient address.');
      }
    }
  
    displayProjectInfo() {
      console.log(`
        Project Name: ${this.projectName}
        Token Symbol: ${this.tokenSymbol}
        Total Supply: ${this.totalSupply}
        Founder: ${this.founder}
        Current Price: ${this.currentPrice}
        Number of Holders: ${this.holders.length}
      `);
    }
  }
  
  // Example usage
  const metaPowerToken = new MetaPowerCrypto('MetaPower Token', 'MPT', 1000000, 'CryptoVisionary');
  
  metaPowerToken.updatePrice(1.5);
  metaPowerToken.mintTokens(500000);
  metaPowerToken.transferTokens('SenderAddress', 'RecipientAddress', 1000);
  metaPowerToken.displayProjectInfo();
  