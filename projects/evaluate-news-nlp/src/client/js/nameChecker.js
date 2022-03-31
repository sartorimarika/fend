import "@babel/polyfill";

function checkForName(url) {
    const RegexURL = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    const TestURL = new RegExp(RegexURL, "i");

    if (TestURL.test(url)) {
        return true;
    }

    return false;
}

export { checkForName }
