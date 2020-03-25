describe('payments functions tests', () => {

    describe('test createCurPayment() function', () => {

        it('should return a payment object based on billAmtInput and tipAmtInput', () => {
            billAmtInput.value = '100';
            tipAmtInput.value = '21';
            expect(createCurPayment().billAmt).toEqual('100');
            expect(createCurPayment().tipAmt).toEqual('21');
            expect(createCurPayment().tipPercent).toEqual(21);
        });
    
        it('should return undefined for negative values', () => {
            billAmtInput.value = '-100';
            tipAmtInput.value = '-21';
            expect(createCurPayment()).toEqual(undefined);
        });
    
        it('should return undefined for empty values', () => {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            expect(createCurPayment()).toEqual(undefined);
        });
    
        afterEach(() => {
            billAmtInput.value = '';
            tipAmtInput.value = '';
        });
    });

    describe('test appendPaymentTable() function', () => {

        it('should take a curPayment object and append 3 tr for billAmt tipAmt and tipPercent', () => {
            billAmtInput.value = '100';
            tipAmtInput.value = '21';
            let curPayment = createCurPayment();
            appendPaymentTable(curPayment);
            expect(paymentTbody.children.length).toEqual(1);
            expect(paymentTbody.children[0].children.length).toEqual(3);
            expect(paymentTbody.children[0].children[0].innerText).toEqual('$100');
        });

        afterEach(() => {
            billAmtInput.value = '';
            tipAmtInput.value = '';
            paymentTbody.innerHTML = '';
        });

        
    });

    describe('test updateSummary() function', () => {
        beforeEach(() => {
            allPayments = {
                payment1: {
                    billAmt: "100",
                    tipAmt: "20",
                    tipPercent: calculateTipPercent("100", "20")
                },
                payment2: {
                    billAmt: "50",
                    tipAmt: "5",
                    tipPercent: calculateTipPercent("50", "5")
                }
            };
        });

        it('should update the shift summary table based on payments', () => {
            updateSummary();
            expect(summaryTds[0].innerHTML).toEqual("$150");
            expect(summaryTds[1].innerHTML).toEqual("$25");
            expect(summaryTds[2].innerHTML).toEqual("15%");
        });

        afterEach(() => {
            allPayments = {};
            summaryTds[0].innerHTML = '';
            summaryTds[1].innerHTML = '';
            summaryTds[2].innerHTML = '';
        })
    });
    
})