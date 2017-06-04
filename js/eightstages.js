function Hamburger() {

    this._init = function() {

        var acc = document.getElementsByClassName("menu-open")[0];
        acc.onclick = this._acc_function;
    };

    this._acc_function = function() {
        this.classList.toggle("active");
        var panel = document.getElementsByClassName("nav-container")[0];
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.style.content = 'url(images/menu-toggle.png)';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.style.content = 'url(images/menu-close.png)';
        }
    };

    this._init();
}
new Hamburger();

window.addEventListener('load', function() {
    if (screen.width > 768)
        alignSideBarHeights();
}, false);

function alignSideBarHeights() {

    var mainHeight = document.getElementsByClassName("main")[0].offsetHeight;
    console.info("mainHeight - " + mainHeight);


    //left side
    var savedElement = document.getElementsByClassName("saved")[0];

    var col3LHeadingElements = document.getElementsByClassName("col3-l")[0].getElementsByClassName("col-heading");

    var col3LHeadingHeight = col3LHeadingElements[0].offsetHeight + col3LHeadingElements[1].offsetHeight;
    console.info("col3LHeadingHeight - " + col3LHeadingHeight);

    var recentHeight = document.getElementsByClassName("recent")[0].offsetHeight;

    console.info("savedVideoTutorialsListHeight - " + recentHeight);

    var heightOfCol3LExceptSaved = col3LHeadingHeight + recentHeight;

    console.info("heightOfCol3LExceptSaved - " + heightOfCol3LExceptSaved);

    savedElement.style.height = "" + (mainHeight - heightOfCol3LExceptSaved) + "px";

    console.info("savedElementHeight - " + savedElement.style.height);


    //right side
    var waysToUseEightStagesListElement = document.getElementsByClassName("waysToUseEightStagesList")[0];

    var col3RHeadingElements = document.getElementsByClassName("col3-r")[0].getElementsByClassName("col-heading");

    var col3RHeadingsHeight = col3RHeadingElements[0].offsetHeight + col3RHeadingElements[1].offsetHeight;

    console.info("col3RHeadingsHeight - " + col3RHeadingsHeight);

    var savedVideoTutorialsListHeight = document.getElementsByClassName("savedVideoTutorialsList")[0].offsetHeight;

    console.info("savedVideoTutorialsListHeight - " + savedVideoTutorialsListHeight);

    var heightOfCol3RExceptWaysToUseEightStagesList = col3RHeadingsHeight + savedVideoTutorialsListHeight;

    console.info("heightOfCol3RExceptWaysToUseEightStagesList - " + heightOfCol3RExceptWaysToUseEightStagesList);

    waysToUseEightStagesListElement.style.height = "" + (mainHeight - heightOfCol3RExceptWaysToUseEightStagesList) + "px";

    console.info("waysToUseEightStagesListHeight - " + waysToUseEightStagesListElement.style.height);
}
console.info = function() {} //disable info debugging
