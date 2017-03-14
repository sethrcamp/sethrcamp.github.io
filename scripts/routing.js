app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/about");

    $stateProvider
    .state('about', {
        url:"/about",
        templateUrl:"pages/about.html",
        controller: "about-controller"
    })
    .state("projects", {
        url:"/projects",
        templateUrl:"pages/projects.html",
        controller: "projects-controller"
    })
    .state('work-history', {
        url:"/work-history",
        templateUrl:"pages/work-history.html",
        controller: "work-history-controller"
    })
    .state('resume', {
        url:"/resume",
        templateUrl:"pages/resume.html",
        controller: "resume-controller"
    })
    .state('contact', {
        url:"/contact",
        templateUrl:"pages/contact.html",
        controller: "contact-controller"
    })
})