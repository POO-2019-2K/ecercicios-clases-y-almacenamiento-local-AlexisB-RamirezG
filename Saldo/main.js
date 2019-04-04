export default class Main {
    constructor() {
        this._tableBalance = document.querySelector("#balance"); 
        //localStorage.clear(); 

        if (localStorage.getItem("inquiry") != null) {
            let inquiry = JSON.parse(localStorage.getItem("inquiry"))
            this._tableBalance.rows[1].cells[0].innerHTML = inquiry.balance;
        }

        document.querySelector("#save").addEventListener("click", () => {
        let mType = document.querySelector("#type").value; 
        let mQuantity = document.querySelector("#quantity").value;
        
        let local = JSON.parse(localStorage.getItem("inquiry"));
        let balance = 0;

        if (local != null) {
            balance = local.balance;    
        }

        if(mType === "withdraw" || mType === "Withdraw") {
            balance = balance - Number(mQuantity); 
            console.log(balance);  
        }
        if(mType === "deposit" || mType === "Deposit") {
            balance = balance + Number(mQuantity);
            console.log(balance);
        }
        
        this._tableBalance.rows[1].cells[0].innerHTML = balance;

        let objInquiry = {
            balance: balance
        }

        localStorage.setItem("inquiry", JSON.stringify(objInquiry));
        
        })
    }
}

let m = new Main();