function toggleDesign() {
    var body = document.body;
    var className = body.className;
    if (className.indexOf('design-two') !== -1) {
        body.className = className.replace('design-two', '').replace(/\s+/g, ' ').trim();
    } else {
        body.className = className + ' design-two';
    }
}