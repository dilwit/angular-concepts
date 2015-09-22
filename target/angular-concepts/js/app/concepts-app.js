angular.module('conceptsApp', [
                           'concepts.controllers',
                           'concepts.directives',
                           'concepts.services',
                           'concepts.constants'
                           ]);

angular.module('concepts.controllers', [
                                        'concepts.controller.forData',
                                        'concepts.controller.forSharedData',
                                        'concepts.controller.forDirectives',
                                        'concepts.controller.forServices',
                                        'concepts.controller.forBackend'
                                        ]);