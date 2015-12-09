export default class forecastService {
  constructor($log, $http, weatherApi){
    this.$log = $log;
    this.$http = $http;
    this.weatherApi = weatherApi;
  }
  pullCurrentWeatherByZip(zip, callback){
    let currentWeather = null;
    this.$http.get(this.weatherApi.url+"zip="+zip+",us&APPID="+ this.weatherApi.appId + "&units=imperial")
      .success(data=>{
        currentWeather = data;
        this.$log.log('successfully pulled weather');
        callback(currentWeather);
      })
      .error(data =>{
        this.$log.log('error reading weather');
      });
  }
}
forecastService.$inject = ['$log', '$http', 'weatherApi'];
