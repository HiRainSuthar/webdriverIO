class CheckoutOverviewPage{
    get orderTotal(){
        return $('.summary_total_label')
    }
    get finishBtn(){
        return $('#finish')
    }
}

export default new CheckoutOverviewPage();
