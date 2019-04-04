export default class Main {
    constructor() {
        this._tableBalance = document.querySelector("#balance");
        this._tableMovements = document.querySelector("#movements");
        this._allMovements = [];
        //localStorage.clear(); 

        if (localStorage.getItem("inquiry") != null) {
            let inquiry = JSON.parse(localStorage.getItem("inquiry"))
            this._tableBalance.rows[1].cells[0].innerHTML = inquiry.balance;
        }

        if (JSON.parse(localStorage.getItem("movement")) != null) {
            let movements = JSON.parse(localStorage.getItem("movement"));

            movements.forEach((movement, index) => {
                console.log(movement);
                let row = this._tableMovements.insertRow(-1);

                let cellType = row.insertCell(0);
                let cellQuantity = row.insertCell(1);

                cellType.innerHTML = movement.type;
                cellQuantity.innerHTML = movement.quantity;
            })
        }

        document.querySelector("#save").addEventListener("click", () => {
            let mType = document.querySelector("#type").value;
            let mQuantity = document.querySelector("#quantity").value;

            // Primera tabla
            let local = JSON.parse(localStorage.getItem("inquiry"));
            let balance = 0;

            if (local != null) {
                balance = local.balance;
            }

            if (mType === "withdraw" || mType === "Withdraw") {
                balance = balance - Number(mQuantity);
                console.log(balance);
            }
            if (mType === "deposit" || mType === "Deposit") {
                balance = balance + Number(mQuantity);
                console.log(balance);
            }

            this._tableBalance.rows[1].cells[0].innerHTML = balance;

            let objInquiry = {
                balance: balance
            }

            localStorage.setItem("inquiry", JSON.stringify(objInquiry));


            // Segunda tabla
            let localMovs = JSON.parse(localStorage.getItem("movement"));

            if (local != null) {
                this._allMovements = localMovs;
            }

            let row = this._tableMovements.insertRow(-1);

            let cellType = row.insertCell(0);
            let cellQuantity = row.insertCell(1);

            cellType.innerHTML = mType;
            cellQuantity.innerHTML = mQuantity;

            let objMovement = {
                type: mType,
                quantity: mQuantity
            }

            this._allMovements.push(objMovement);
            localStorage.setItem("movement", JSON.stringify(this._allMovements));
            console.log(JSON.parse(localStorage.getItem("movement")))
        })
    }
}

let m = new Main();