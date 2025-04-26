declare global {
  interface Window {
    cashu: any;
  }
}

const mintUrl = "";

class Cashu {
  constructor(private mintUrl: string) {}

  async getInfo() {
    // Add code
  }

  async getMintQuote() {
    // Add code
  }

  async mintProofs(quoteId: string) {
    // Add code
  }

  async encodeToken() {
    // Add code
  }

  async sendProofs() {
    // Add code
  }

  async receiveProofs() {
    // Add code
  }
}

window.cashu = new Cashu(mintUrl);
