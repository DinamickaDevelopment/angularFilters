angular.module('app',[])
.controller('mainCtrl', function ($scope) {
    $scope.category = 'all'; 
    $scope.images = [
        { src: 'img/001.jpg', category: 1 }, { src: 'img/002.jpg', category: 2 }, { src: 'img/003.jpg', category: 3 },
        { src: 'img/001.jpg', category: 1 }, { src: 'img/002.jpg', category: 2 }, { src: 'img/003.jpg', category: 3 },
        { src: 'img/001.jpg', category: 1 }, { src: 'img/002.jpg', category: 2 }, { src: 'img/003.jpg', category: 3 },
        { src: 'img/001.jpg', category: 1 }, { src: 'img/002.jpg', category: 2 }, { src: 'img/003.jpg', category: 3 }
    ]

    $scope.filter_images = function ($event) {
        $scope.category = $event.target.dataset.category; 
    }

    $scope.image_filter = function (img) {

        if (img.category == $scope.category) {
            return img; 
        } else if ($scope.category == 'all') {
            return img; 
        }
    }
})


