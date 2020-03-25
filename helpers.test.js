describe('helper function tests', function() {
    beforeEach(() => {
        allPayments = {
            payment1: {
                billAmt: "100",
                tipAmt: "23",
                tipPercent: calculateTipPercent("100", "23")
            },
            payment2: {
                billAmt: "50",
                tipAmt: "15",
                tipPercent: calculateTipPercent("50", "15")
            }
        };
        allServers = {
            server1: { serverName: "Alice" },
            server2: { serverName: "Bob" }
        };
    });

    it('should calculate total amount for billAmt and tipAmt', function() {
        expect(sumPaymentTotal("billAmt")).toEqual(150);
        expect(sumPaymentTotal("tipAmt")).toEqual(38);
    });

    it('should calculate tip percentage as tip / bill amount', () => {
        expect(calculateTipPercent(100, 22)).toEqual(22);
        expect(calculateTipPercent("100", "22")).toEqual(22);
    });

    it('should take a tr and append a td with "value" as innerText', () => {
        let newTrTest = document.createElement('tr');
        appendTd(newTrTest, "$100");
        expect(newTrTest.children.length).toEqual(1);
        expect(newTrTest.children[0].innerText).toEqual("$100");
    });

    it('should append a delete button that deletes the table row and the server from allServers', () => {
        let newTrTest = document.createElement('tr');
        appendDeleteBtn(newTrTest);
        expect(newTrTest.children.length).toEqual(1);
        expect(newTrTest.children[0].innerText).toEqual('X');
    })

    afterEach(() => {
        allPayments = {};
        allServers = {};
    })
})