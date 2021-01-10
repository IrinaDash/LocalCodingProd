class Page {

    get notification() {
        return $('.ant-notification-notice-message')
    }

    clearInput(element) {
        element.keys(['Command', 'a']);
        element.keys(['Backspace']);

        if (element.getValue() !== "") {
            element.keys(['Control', 'a']);
            element.keys(['Backspace']);
        }
    }


    get localCodingLogo() {
        return $('.site-name')
    }

}

export default Page;
