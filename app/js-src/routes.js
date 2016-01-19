define(['services/dependencyResolverFor'], function(dependencyResolverFor)
{
    var loadController = function(controllerName) {
        return ["$q", function($q) {
            var deferred = $q.defer();
            require([controllerName], function() {deferred.resolve(); });
            return deferred.promise;
        }];
    };

    return{
        defaultRoutePath: '/',
        states: [
            {
            name: "home",
            data: {
                url: '/',
                views: {
                    "": {
                        templateUrl: '/views/home.html',
                        controller: 'HomeViewController'
                    },
                    'menu@home':(
                     {
                         templateUrl: 'views/menu/menu.html',
                         controller: 'MenuController'
                     }),
                    'footer@home':(
                    {
                        templateUrl: 'views/menu/footer.html',
                        controller: ''
                    })
                },
                resolve: { homeviewcontroller: loadController("controllers/HomeViewController"),
                            menuviewcontroller: loadController("controllers/MenuController")}
                }
            },
            {
                name: "about",
                data: {
                    url: '/about',
                    views: {
                        "": {
                            templateUrl: '/views/about.html',
                            controller: 'AboutViewController'
                        },
                        'menu@about':(
                        {
                            templateUrl: 'views/menu/menu.html',
                            controller: 'MenuController'
                        }),
                        'footer@about':(
                        {
                            templateUrl: 'views/menu/footer.html',
                            controller: ''
                        }),
                        'bottom@about':(
                        {
                            templateUrl: 'views/about/about-bottom.html',
                            controller: ''
                        })
                    },
                    resolve: { homeviewcontroller: loadController("controllers/AboutViewController"),
                                menuviewcontroller: loadController("controllers/MenuController")}
                }
            },
            {
                name: "about.child",
                data: {
                    url: '/child1',
                    views: {
                        "": {
                            templateUrl: '/views/about/about-child.html',
                            controller: 'AboutChildViewController'
                        }
                    },
                    resolve: { aboutchildviewcontroller: loadController("controllers/AboutChildViewController")}
                }
            },
            {
                name: "about.child2",
                data: {
                    url: '/child2',
                    views: {
                        "": {
                            templateUrl: '/views/about/about-child2.html',
                            controller: 'AboutChildViewController2'
                        }
                    },
                    resolve: { aboutchild2viewcontroller: loadController("controllers/AboutChildViewController2")}
                }
            },
            {
                name: "contact",
                data: {
                    url: '/contact',
                    views: {
                        "": {
                            templateUrl: '/views/contact.html',
                            controller: 'ContactViewController'
                        },
                        'menu@contact':(
                        {
                            templateUrl: 'views/menu/menu.html',
                            controller: 'MenuController'
                        }),
                        'footer@contact':(
                        {
                            templateUrl: 'views/menu/footer.html',
                            controller: ''
                        }),
                        'left-col@contact':(
                        {
                            templateUrl: 'views/contact/contact-left.html',
                            controller: ''
                        }),
                        'right-col@contact':(
                        {
                            templateUrl: 'views/contact/contact-right.html',
                            controller: ''
                        })
                    },
                    resolve: { homeviewcontroller: loadController("controllers/ContactViewController"),
                                menuviewcontroller: loadController("controllers/MenuController")}
                }
            }

        ]
    };
});