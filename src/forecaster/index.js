import angular from 'angular';
import weatherCard from './weatherCard';
import zipCodeService from './zipCodeService';
import forecastService from './forecastService';

angular.module('forecaster', [])
  .directive('weatherCard', weatherCard.directiveFactory)
  .service('forecastService', forecastService)
  .service('zipCodeService', zipCodeService)
  .constant('weatherApi', {
    url: 'http://api.openweathermap.org/data/2.5/weather?',
    appId: '694bb88fa9b091ac3640182441e4930b'
  })
  .constant('zipApi', {
    // production
    url: 'https://api.smartystreets.com/zipcode?auth-id=6479289724117610',
    // dev
    // url: 'https://api.smartystreets.com/zipcode?auth-id=5ee087b5-86a4-18c6-69f0-0720c145ae49&auth-token=7WR0DWT0wxHvTxslIJs3'
  });
